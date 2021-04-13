import SnglFeature from './feature';
import featureData from '../../data/jumb.json';

function Feature() {
    return (
        <SnglFeature.Container>
            {featureData.map(item => (
                    <SnglFeature key={item.id} direction={item.direction} >
                        <SnglFeature.Side>
                            <SnglFeature.Title>{item.title}</SnglFeature.Title>
                            <SnglFeature.SubText>{item.subTitle}</SnglFeature.SubText>
                        </SnglFeature.Side>
                        <SnglFeature.Side>                        
                            <SnglFeature.Img>
                                <img src= {item.image} alt= {item.alt}/>
                            </SnglFeature.Img>
                        </SnglFeature.Side>
                    </SnglFeature>)
                )
            }
        </SnglFeature.Container>
    )
}

export default Feature;

