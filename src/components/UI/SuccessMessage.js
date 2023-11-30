import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';

const SuccessMessage = ({ open, handleClose }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #2e7d32',
    borderRadius: 1.2,
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" color='success.main'>
            Cosmic Library Notification
          </Typography>
          <Typography sx={{ mt: 2, color: '#616161' }}>
            You have successfully reserved your book! <br />
            Have a good reading!
          </Typography>
        </Box>
      </Fade>
    </Modal>
  )
}
export default SuccessMessage