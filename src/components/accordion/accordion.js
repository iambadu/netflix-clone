// Accordion color = 
import { useState } from 'react';
import faqData from '../../data/faqs.json';

import AddIcon from 'mdi-react/AddIcon'
import CloseIcon from 'mdi-react/CloseIcon'

import { ItemWrap, Wrap, HeaderText, Item, Title, Header, Body } from './styles/accordion';

export function FaqItem({data}) {
    const [toggl, setToggl] = useState(false);
    const {id, header, body} = data;
    console.log(data);
    return (
        <Item key={id}>
            <Header onClick={() => setToggl(!toggl)}>
                <HeaderText>{header}</HeaderText>
                {toggl ? <CloseIcon size="40" /> : <AddIcon size="40" />}
            </Header>
            { toggl && <Body>{body}</Body>}
        </Item>
    )
}

export default function Accordion() {    
    return (
        <Wrap>
            <Title>Frequently Asked Questions</Title>
            <ItemWrap>
                {faqData.map((item) => (
                        <FaqItem data={item} />
                    ))
                }
            </ItemWrap>
        </Wrap >
    )
}
