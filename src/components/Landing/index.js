import React from "react";

class Landing extends React.Component {
    /*constructor(props) {
        super(props);
        this.state = {
            name: "Mandakh"
        }
    }

    componentDidMount() {
        this.setState({
            name: "tskneg"
        })
    }

    handleButtonClick = () => {
        this.setState({
            name: "mandakh"
        })
    };
*/
    render() {

        return (

            <div className="home">


                <div className="home_slider_container" style={{}}>

                    <div className="owl-carousel owl-theme home_slider">

                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage: "url(https://content.ikon.mn/news/2017/4/21/afb59e_17632146_747198765435046_8183711284703675781_o_x974.jpg"}}></div>

                            <div className="home_slider_content text-center">
                                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                                    <h1>discover</h1>
                                    <h1>the world</h1>
                                    <div className="button home_slider_button"><div className="button_bcg"></div><a href="#">explore now<span></span><span></span><span></span></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider.jpg)"}}></div>

                            <div className="home_slider_content text-center">
                                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                                    <h1>discover</h1>
                                    <h1>the world</h1>
                                    <div className="button home_slider_button"><div className="button_bcg"></div><a href="#">explore now<span></span><span></span><span></span></a></div>
                                </div>
                            </div>
                        </div>

                        <div className="owl-item home_slider_item">
                            <div className="home_slider_background" style={{backgroundImage: "url(images/home_slider.jpg)"}}></div>

                            <div className="home_slider_content text-center">
                                <div className="home_slider_content_inner" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                                    <h1>discover</h1>
                                    <h1>the world</h1>
                                    <div className="button home_slider_button"><div className="button_bcg"></div><a href="#">explore now<span></span><span></span><span></span></a></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="home_slider_dots">
                        <ul id="home_slider_custom_dots" className="home_slider_custom_dots">
                            <li className="home_slider_custom_dot active"><div></div>01.</li>
                            <li className="home_slider_custom_dot"><div></div>02.</li>
                            <li className="home_slider_custom_dot"><div></div>03.</li>
                        </ul>
                    </div>

                </div>

            </div>        
        )
    }
}
export default Landing;