import React from "react";

class DocumentEncryptorSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Document Encryptor
                </h1>
                <p>
                    Document Encryptor is a mac based application that allows the user to encrypt a text file (in the format txt) using
                    one of three ciphers. These ciphers are old ciphers and are not meant to represent new techniques, but are merely
                    applications of very basic cryptology methods. The ciphers are: the Playfair Cipher, the Hill Cipher, and the Double
                    Columnar Transposition Cipher. Each of these ciphers can be selected to encrypt the text document, and additionally
                    the Double Columnar Transposition Cipher can be combined with the other two to create an even more complex cipher.
                    The program also decrypts any files it has encrypted in the past. The user need not even select which cipher to
                    decrypt with; the program figures this out by itself. For encryption, the program simply requires the user to input
                    the file location, and which cipher to use. For decryption, the user need only enter the location of the file that
                    needs to be decrypted.
                    <br/><br/>
                    The application was created in Xcode, and written in C++ as a way to familiarize myself with cryptology. Though
                    written completely in C++, the code is built on the SFML, which provided the necessary functions for the
                    code to work. Regardless, anyone versed in C++ would be able to easily examine the code.
                    <br/><br/>
                    To launch the application, a mac with the latest OS is required. The application itself can be launched immediately
                    once downloaded. It requires a mouse/trackpad and a keyboard to operate. The user should be able to easily navigate
                    through the UI to interact with the application. Note that the full file path of the document should be entered. For
                    example: /Users/akshaysubramaniam/Documents/Example.txt.
                    <br/><br/>
                    Note that some symbols will NOT work with the program. These are symbols such as ["], ['], or [~]. Symbols like
                    [.], [,], and all shift+number keys will work. In creating a text file, the user is advised to use a minimal amount
                    of symbols. If a error should crash the program, it will most likely result from the usage of an illegal symbol.
                    <br/><br/>
                    NOTE: This application can only be downloaded on Mac Operating Systems.
                </p>

                <h3>
                    How and Why Document Encryptor Was Made
                </h3>

                <p>
                    After finishing Color Synthesizer, I began to develop an interest in developing more mathematically heavy applications
                    in C++. Research led me to learing about crytography, which I began to take an active interest in. As a result, I
                    started to code in C++ the beginnings of a crytography application. My initial desire was to implement a modern
                    crytography application, but I later opted to do a simpler application to get the basics of crytography down. This
                    was the motivation behind the creation of the Document Encryptor app, which uses primitive cryptographic methods to
                    encrypt text strings.
                    <br/><br/>
                    Document Encryptor is entirely written in C++, and only differs from the basic language in that it uses the SFML for rendering purposes. However, the code can very easily be understood by someone versed in C++, and
                    simply uses basic logic for the majority of its functions.
                    <br/>
                </p>

            </div>
        );
    };
}

export default DocumentEncryptorSummaryComponent;