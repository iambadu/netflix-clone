// Accordion color = 
import { useState } from 'react';
import faqData from '../../data/faqs.json';

import AddIcon from 'mdi-react/AddIcon'
import CloseIcon from 'mdi-react/CloseIcon'

import Accord from './styles/accordion';
import HomeButton from '../homelead/homebutton';

export function FaqItem({ data }) {
    const [toggl, setToggl] = useState(false);
    const { id, header, body } = data;
    console.log(data);
    return (
        <Accord.Item key={id}>
            <Accord.Header onClick={() => setToggl(!toggl)}>
                <Accord.HeaderText>{header}</Accord.HeaderText>
                {toggl ? <CloseIcon size="35" /> : <AddIcon size="35" />}
            </Accord.Header>
            { toggl && <Accord.Body>{body}</Accord.Body>}
        </Accord.Item>

    )
}

export default function Accordion() {
    return (
        <>
            <Accord.Wrap>
                <Accord.Title>Frequently Asked Questions</Accord.Title>
                <Accord.ItemWrap>
                    {faqData.map((item) => (<FaqItem data={item} />))}
                </Accord.ItemWrap>
            </Accord.Wrap >
            <HomeButton/>
        </>
    )
}
