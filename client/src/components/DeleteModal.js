import { useContext } from 'react'
import { GlobalStoreContext } from '../store'
import { Typography, Box, Modal, Button } from '@mui/material'

function DeleteModal() {
    const { store } = useContext(GlobalStoreContext);
    let name = "";
    if (store.listMarkedForDeletion) {
        name = store.listMarkedForDeletion.name;
    }
    function handleDeleteList() {
        store.deleteMarkedList();
    }
    function handleCloseModal() {
        store.unmarkListForDeletion();
    }
    return (
        <Modal
            open={store.listMarkedForDeletion ? true : false}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 400,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
            }}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    pt: 2,
                    px: 4,
                    pb: 3,
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Delete the {name} Top 5 List?
                    </Typography>
                    <Button onClick={handleDeleteList}>Confirm</Button>
                    <Button onClick={handleCloseModal}>Close</Button>
                </Box>
            </Box>
        </Modal >
    );
}

export default DeleteModal;