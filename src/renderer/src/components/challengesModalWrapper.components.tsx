import { Modal, Box } from '@mui/material'
import ChallengeModal from './challengeModal.components'

export const ChallengeModalWrapper = ({ open, handleClose, challenges }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '80%',
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4
        }}
      >
        <ChallengeModal challenges={challenges} />
      </Box>
    </Modal>
  )
}
