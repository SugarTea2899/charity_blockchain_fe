import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles, useTheme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Tag from '../Tag';
import { FormControl, MenuItem } from '@material-ui/core';
let stt = 0;
const columns = [
    { id: 'id', label: 'Id', minWidth: 10 },
    { id: 'from', label: 'From', minWidth: 170 },
    { id: 'to', label: 'To', minWidth: 100 },
    {
        id: 'date',
        label: 'Date',
        minWidth: 100,
        align: 'center',
        format: value => value.toLocaleString('en-US'),
    },
    {
        id: 'amount',
        label: 'Amount',
        minWidth: 100,
        align: 'center',
        format: value => value.toLocaleString('en-US'),
    },
];

function createData(id,from, to, date, amount) {
    


    return { id,from, to, date, amount };
}

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}))(TableCell);

const data = [

    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),

    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),
    createData(
        1,
        'DQT',
        'TQT',
        '04/06/2021',
        150,
    ),

];

const useStyles = makeStyles({
    root: {
        margin: '5% 5% 10% 5%',
    },
    container: {
        maxWidth: '100%',
    },
});

const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                ) : (
                    <KeyboardArrowLeft />
                )}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                ) : (
                    <KeyboardArrowRight />
                )}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

export default function DonationTable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, _] = useState(10);
    const [rows, setRows] = useState(data)
    const [status, setStatus] = useState("All Status")
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };


    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ width: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                colSpan={3}
                rowsPerPageOptions={[10]}
                component="div"
                labelRowsPerPage=""
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                ActionsComponent={TablePaginationActions}
            />
        </Paper>
    );
}
