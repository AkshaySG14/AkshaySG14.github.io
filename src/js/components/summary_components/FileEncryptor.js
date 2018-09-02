import React from "react";

class FileEncryptorSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    File Encryptor
                </h1>
                <p>
                    File Encryptor is another mac based app that can encrypt ANY file type. The program is able to encrypt a file
                    through one of three ciphers, all block ciphers. The three block cipher modes are: Electronic Codebook, Cipher
                    Block Chaining, and Counter. These ciphers operate directly on the file's memory contents, meaning the bytes
                    themselves are encrypted. Thus, this program will completely transform the file, making it unreadable once
                    encrypted.
                    <br/><br/>
                    The application was created in Xcode, and written in C++ as a way to familiarize myself with digital cryptology.
                    Though written completely in C++, the code is built on the SFML, which provided the necessary functions
                    for the code to work. Regardless, anyone versed in C++ would be able to easily examine the code.
                    <br/><br/>
                    To launch the application, a mac with the latest OS is required. The application itself can be launched immediately
                    once downloaded. It requires a mouse/trackpad and a keyboard to operate. The user should be able to easily navigate
                    through the UI to interact with the application. Note that the full file path of the document should be entered. For
                    example: /Users/akshaysubramaniam/Documents/Example.png.
                    <br/><br/>
                    Note that the program WILL make the file unreadable once encrypted, meaning the user cannot access it properly.
                    However, once decrypted, the file will be interactable with as normal.
                    <br/><br/>
                    NOTE: This application can only be downloaded on Mac Operating Systems.
                </p>

                <h3>
                    How and Why File Encryptor Was Made
                </h3>

                <p>
                    There's truly not much to say about File Encryptor, as it is simply a follow-up to Document Encryptor. As Document
                    Encryptor was only capable of encrypting text files, I sought to create an application that could encrypt anything,
                    and more importantly, do so using modern encryption methods. After a few days of studying digital encryption, I
                    created File Encryptor, which has the capabilities of encrypting any file with the modern, albeit basic methods of
                    encryption.
                    <br/><br/>
                    File Encryptor is entirely written in C++, and only differs from the basic language in that it uses the SFML for rendering purposes. However, the code can very easily be understood by someone versed in C++, and
                    simply uses basic logic for the majority of its functions.
                    <br/>
                </p>
            </div>
        );
    };
}

export default FileEncryptorSummaryComponent;