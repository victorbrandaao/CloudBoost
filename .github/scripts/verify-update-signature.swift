#!/usr/bin/env swift

import CryptoKit
import Foundation

enum VerificationError: Error, CustomStringConvertible {
    case usage
    case invalidPublicKey
    case invalidSignature

    var description: String {
        switch self {
        case .usage:
            return "Usage: verify-update-signature.swift <public-key-base64> <package> <signature>"
        case .invalidPublicKey:
            return "The embedded CloudBoost update public key is invalid."
        case .invalidSignature:
            return "The published update signature is invalid."
        }
    }
}

do {
    let arguments = CommandLine.arguments
    guard arguments.count == 4 else { throw VerificationError.usage }

    let publicKeyText = arguments[1].trimmingCharacters(in: .whitespacesAndNewlines)
    guard let publicKeyData = Data(base64Encoded: publicKeyText),
          let publicKey = try? Curve25519.Signing.PublicKey(rawRepresentation: publicKeyData) else {
        throw VerificationError.invalidPublicKey
    }

    let package = try Data(contentsOf: URL(fileURLWithPath: arguments[2]))
    let signatureFile = try Data(contentsOf: URL(fileURLWithPath: arguments[3]))
    let signature: Data
    if let encoded = String(data: signatureFile, encoding: .utf8)?
        .trimmingCharacters(in: .whitespacesAndNewlines),
       let decoded = Data(base64Encoded: encoded) {
        signature = decoded
    } else {
        signature = signatureFile
    }

    guard publicKey.isValidSignature(signature, for: package) else {
        throw VerificationError.invalidSignature
    }

    print("Publisher signature verified: \(URL(fileURLWithPath: arguments[2]).lastPathComponent)")
} catch {
    fputs("\(error)\n", stderr)
    exit(1)
}
