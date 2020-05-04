import React from 'react';

import Banner from '../../components/Banner';
import Newsletter from '../../components/Newsletter';
import ChatBot from '../../components/ChatBot';

function Home() {
    return (
        <div>
            <Banner />
            <ChatBot />
            <Newsletter />
        </div>
    );
}

export default Home;