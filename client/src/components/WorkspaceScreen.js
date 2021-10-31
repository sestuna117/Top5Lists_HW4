import { useContext, useEffect, useState } from 'react'
import Top5Item from './Top5Item.js'
import List from '@mui/material/List';
import { Typography } from '@mui/material'
import { GlobalStoreContext } from '../store/index.js'
import { useParams } from "react-router-dom";
import AuthContext from '../auth'
import UnauthModal from './UnauthModal.js'

/*
    This React component lets us edit a loaded list, which only
    happens when we are on the proper route.
    
    @author McKilla Gorilla
*/
function WorkspaceScreen() {
    const { id } = useParams();
    const { auth } = useContext(AuthContext);
    const { store } = useContext(GlobalStoreContext);
    const [noUser, setNoUser] = useState(false);

    useEffect(() => {
        store.setCurrentList(id).then(gotList => {
            if (!gotList) {
                setNoUser(true);
            }
        })
    }, [])

    let editItems = "";
    if (store.currentList) {
        editItems =
            <List id="edit-items" sx={{ width: '100%', bgcolor: 'background.paper' }}>
                {
                    store.currentList.items.map((item, index) => (
                        <Top5Item
                            key={'top5-item-' + (index + 1)}
                            text={item}
                            index={index}
                        />
                    ))
                }
            </List>;
    }

    if (auth.user && store.currentList) {
        return (auth.user.email === store.currentList.ownerEmail) ? (
            <div id="top5-workspace">
                <div id="workspace-edit">
                    <div id="edit-numbering">
                        <div className="item-number"><Typography variant="h3">1.</Typography></div>
                        <div className="item-number"><Typography variant="h3">2.</Typography></div>
                        <div className="item-number"><Typography variant="h3">3.</Typography></div>
                        <div className="item-number"><Typography variant="h3">4.</Typography></div>
                        <div className="item-number"><Typography variant="h3">5.</Typography></div>
                    </div>
                    {editItems}
                </div>
            </div>
        ) :
            <UnauthModal />
    }
    else {
        return noUser ? <UnauthModal /> : null
    }
}

export default WorkspaceScreen;