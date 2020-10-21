import React from 'react';
import { VirtuosoGrid } from 'react-virtuoso';

function ScrollableContainer() {
    return (
        <VirtuosoGrid
            totalCount={10000}
            overscan={200}
            // ItemContainer={ItemContainer}
            // ListContainer={ListContainer}
            // item={index => <ItemWrapper>Item {index}</ItemWrapper>}
            style={{ height: '500px', width: '100%' }}
        />
    )
}

export default ScrollableContainer;
