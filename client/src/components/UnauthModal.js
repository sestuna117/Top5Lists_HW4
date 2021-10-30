import { Typography, Box, Modal } from '@mui/material'
import { useContext } from 'react'
import { GlobalStoreContext } from '../store'

export default function UnauthModal() {
    const { store } = useContext(GlobalStoreContext);
    const handleClose = () => store.closeCurrentList();

    return (
        <div>
            <Modal
                open={true}
                onClose={handleClose}
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Unathorized Access!
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        You are not allowed on this page!
                    </Typography>
                </Box>
            </Modal>
        </div>
    )
}