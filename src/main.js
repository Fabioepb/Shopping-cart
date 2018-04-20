import React from 'react'
import Routes from './routes'
import TopBar from './NavBar/appBar'
import * as mui from 'material-ui'
import classNames from 'classnames'
import CartDrawer, {drawerWidth} from './Drawer/cartDrawer'

const styles = theme =>({
    root: {
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    container: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        paddingTop: theme.spacing.unit * 8,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,        
        }),
        marginRight: -drawerWidth,
    },
    containerShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },

})

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            open: true
        }
    }

    render() {
        const {classes} = this.props;
        const {open} = this.state;

        return (
            <div className={classes.root}>
                <TopBar open={open} handleDrawer={this.handleDrawer}/>
                <div 
                    className={classNames(classes.container, { 
                        [classes.containerShift]: open,                         
                })}>
                <Routes />
                </div>
                <CartDrawer open={open} />               
            </div>
        )
    }

    handleDrawer = () => {
        this.setState(state => ({
            open: 
                state.open === true 
                ? false 
                : true
        }))
        
    }

}

export default mui.withStyles(styles, {withTheme:true})(Main)