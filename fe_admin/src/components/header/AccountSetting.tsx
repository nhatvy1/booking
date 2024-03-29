import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import { IoIosLogOut } from 'react-icons/io'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/slices/auth.slice'

interface Props {
  anchorEl :null | HTMLElement
  handleClose: ()=> void
  open: boolean
}
const AccountSetting = ({ anchorEl, handleClose, open }: Props)=> {
  const dispatch = useDispatch()

  return (
    <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={()=> dispatch(logout())}>
          <ListItemIcon>
            <IoIosLogOut />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
  )
}

export default AccountSetting