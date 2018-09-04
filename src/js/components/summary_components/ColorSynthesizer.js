import React from "react";

class ColorSynthesizerSummaryComponent extends React.Component {
    render() {
        return (
            <div>
                <br/>
                <h1>
                    Color Synthesizer
                </h1>
                <p>
                    Color Synthesizer is a mac application that allows the user to interact with a "pixel board". By coloring pixels on
                    the board, the user can create a variety of colorful patterns of any shape or size. The application allows the user
                    to change the cursor size, to erase or fill the pixel board, and to create nearly any color through three color
                    sliders.
                    <br/><br/>
                    The application itself was created in Xcode, and written in C++ as a learning experience. Though written completely
                    in C++, the code is built on the SFML, which provided the functions necessary for the code to work.
                    Regardless, anyone versed in C++ would be able to easily examine the code.
                    <br/><br/>
                    To launch the application, a mac with the latest OS is required. The application itself can be launched immediately
                    once downloaded. Due to the simplicity of the application, it only requires a mouse/trackpad. The user should be
                    able to easily navigate through the UI to interact with the application.
                    <br/><br/>
                    NOTE: This application can only be downloaded on Mac Operating Systems.
                </p>

                <h3>
                    How and Why Color Synthesizer Was Made
                </h3>

                <p>
                    My first attempts at writing C++ gradually coalesced into the development Color Synthesizer. Though originally a simple application
                    designed purely for exploratory purposes, Color Synthesizer was developed as a fully-fledged application with the
                    help of the the Simple and Fast Multimedia Library (SFML). Thus, Color Synthesizer, though basic in its composition, is a completed application
                    that users can not only interact with but learn from as well.
                    <br/><br/>
                    Color Synthesizer is entirely written in C++, and only differs from the basic language in that it uses the SFML for rendering purposes. However, the code can very easily be understood by someone versed in C++, and
                    uses basic logic for the majority of its functions.
                    <br/>
                </p>
            </div>
        );
    };
}

export default ColorSynthesizerSummaryComponent;