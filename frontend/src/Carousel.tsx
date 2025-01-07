import { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default class DemoCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/INSLGW/winter_nov3_2x._CB542458127_.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Dec_24/3000X1200_Garmin_JAN._CB537296585_.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/APAY/BAU/travel/IF_PC-Hero-Template_GW-VX_PCH.T2-copy._CB538933352_.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/Dec_24/1200X600_999_JAN._CB537341775_.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/AmazonBrands/GW_CPB_/QC_CC/pets/PC_Category_Hero_3000x1200_2._CB538570186_.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/OnePlus/Flagship/OnePlus13R_NewLaunch/Teaser/GW/24thDec/D189060327_WLD_OnePlus_13R_NewLaunch_DesktopTallHero_3000x1200._CB538658337_.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};
