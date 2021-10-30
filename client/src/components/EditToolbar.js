import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import Button from '@mui/material/Button';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import CloseIcon from '@mui/icons-material/HighlightOff';

/*
    This toolbar is a functional React component that
    manages the undo/redo/close buttons.
    
    @author McKilla Gorilla
*/
function EditToolbar() {
    const { store } = useContext(GlobalStoreContext);

    function handleUndo() {
        store.undo();
    }
    function handleRedo() {
        store.redo();
    }
    function handleClose() {
        store.closeCurrentList();
    }
    let editStatus = false;
    if (store.isItemEditActive || !store.currentList) {
        editStatus = true;
    }
    return (
        <div id="edit-toolbar">
            <Button
                disabled={!store.canUndo() || editStatus}
                id='undo-button'
                onClick={store.canUndo() ? handleUndo : null}
                variant="contained">
                <UndoIcon />
            </Button>
            <Button
                disabled={!store.canRedo() || editStatus}
                id='redo-button'
                onClick={store.canRedo() ? handleRedo : null}
                variant="contained">
                <RedoIcon />
            </Button>
            <Button
                disabled={editStatus}
                id='close-button'
                onClick={!editStatus ? handleClose : null}
                variant="contained">
                <CloseIcon />
            </Button>
        </div>
    )
}

export default EditToolbar;