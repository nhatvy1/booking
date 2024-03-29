import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Link } from 'react-router-dom'
import { CiUser } from 'react-icons/ci'
import { MdOutlineSecurity } from 'react-icons/md'
import ListSubheader from '@mui/material/ListSubheader'

const Sidebar = () => {
  return (
      <Box sx={{ height: 'calc(100vh - 80px)', width: '300px', borderRight: '1px solid lightgray' }}>
        <List
          sx={{ width: '100%' }}
          component='nav'
          aria-labelledby='nested-list-subheader'
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
          Dashboard
        </ListSubheader>
          }
        >
          <Link to='/admin/quan-ly-tai-khoan'>
            <ListItemButton>
              <ListItemIcon>
                <CiUser size={30} />
              </ListItemIcon>
              <ListItemText primary='Quản lý tài khoản' />
            </ListItemButton>
          </Link>
          <Link to='/admin/quan-ly-phan-quyen'>
            <ListItemButton>
              <ListItemIcon>
                <MdOutlineSecurity size={30} />
              </ListItemIcon>
              <ListItemText primary='Quản lý phân quyền' />
            </ListItemButton>
          </Link>
        </List>
      </Box>
  )
}

export default Sidebar
