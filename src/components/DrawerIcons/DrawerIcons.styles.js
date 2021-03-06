import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    width: '35px',
    height: '35px',
  },
  iconButton: {
    width: '50px',
    height: '50px',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing(1),
  },
}));

export default useStyles;
