import React,{useEffect, useState,Ref} from 'react';
import './index.css'

const List = () =>{
    const [listItems,setListItems] = useState(Array.from(Array(30).keys(),n=>n+1));
    const [isFetching,setIsFetching] = useState(false)
    const scrollBarRef = React.createRef();
    const [scrollingTop,setScrollingTop] = useState(0)

    useEffect(()=>{
        if(!isFetching) return;
        fetchMoreListItems();
    },[isFetching])

    function fetchMoreListItems() {
        setTimeout(() => {
          setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
          setIsFetching(false);
        }, 2000);
    }

    const elementScroll = (value) =>{
        if(scrollingTop > scrollBarRef.current.scrollTop){
            setIsFetching(true) 
        }
        setScrollingTop(scrollBarRef.current.scrollTop + 50)
    }

    return(
        <div className="container">
            <div id="scrollBar" ref={scrollBarRef} onScroll={elementScroll} className="limitborder">
                <ul className="list-group mb-2">
                    {listItems.map(listItem=><li className="list-group-item">List Item {listItem}</li>)}
                </ul>
            </div>
            {isFetching && 'Fetching more list items...'}
        </div>
    );
};

export default List;