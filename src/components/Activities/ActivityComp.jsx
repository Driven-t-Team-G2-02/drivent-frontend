import styled from "styled-components"
import {BiLogIn} from "react-icons/bi"
import {VscError} from "react-icons/vsc"

export default function ActivityComp(props) {
    if(props.selected != props.day) return(<></>)
    return(
        <ActivityDiv onClick={()=>console.log(props.remaining)} $duration={props.duration}>
            <ActivityDesc>
                <ActivityTitle>
                    Minecraft: montando o PC ideal
                </ActivityTitle>
                <ActivityTime>
                    09:00 - 10:00
                </ActivityTime>
            </ActivityDesc>
            <Spacer/>
            <ActivityAction $places={props.remaining}>
                {props.remaining > 0
                    ?<BiLogIn style={{color:"#428734",width:20,height:20}}/>
                    :<VscError style={{color:"red",width:20,height:20}}/>
                }
                {props.remaining > 0 
                    ?`${props.remaining} vagas`
                    :`Esgotado`
                }
            </ActivityAction>
        </ActivityDiv>
    )
}

const ActivityDiv = styled.div`
    display: flex;
    width: 100%;
    height: ${props=>80+(props.$duration-1)*88}px;
    border-radius: 5px;
    padding: 10px;
    background-color: #F1F1F1;
`;

const ActivityDesc = styled.div`
    display: flex;
    flex-direction: column;
    flex: 4;
    gap: 6px;
`;

const ActivityTitle = styled.div`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 700;
    font-size: 12px;
`;

const ActivityTime = styled.div`
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 12px;
`;

const Spacer = styled.hr`
    margin: 0 10px;
    border-width: 0 1px 0 0;
    border-color: #CFCFCF;
`;

const ActivityAction = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: ${props=>props.$places>0?"green":"red"};
    font-family: "Roboto","Helvetica","Arial",sans-serif;
    font-weight: 400;
    font-size: 9px;
    gap: 6px;
`;