import React, { useEffect, useState } from 'react';
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
import { getDate } from 'date-fns';
import { formatDate } from '../../utils/helpers';
let stt = 0;
const columns = [
    { id: 'stt', label: '#', minWidth: 10 },
    { id: 'name', label: 'Projects', minWidth: 170 },
    { id: 'start', label: 'Start\u00a0Date', minWidth: 100 },
    {
        id: 'end',
        label: 'End\u00a0Date',
        minWidth: 100,
        align: 'center',
        format: value => value.toLocaleString('en-US'),
    },
    {
        id: 'amount',
        label: 'Amount Donated',
        minWidth: 100,
        align: 'center',
        format: value => value.toLocaleString('en-US'),
    },
    {
        id: 'tag',
        label: 'Status',
        minWidth: 70,
        align: 'center',
    },
];

function createData(name, startDate, endDate, amount, status) {
    stt += 1;
    let tag;
    if (status === 1) {
        tag = <Tag content="Processing" backGroundColor="#2980b9" textColor="white" />;
    }

    if (status === 2) {
        tag = (
            <Tag content="End" backGroundColor="#999999" textColor="white" />
        );
    }

    if (status === 0) {
        tag = <Tag content="Waiting" backGroundColor="red" textColor="white" />;
    }
    let start = formatDate(new Date(startDate)).toLocaleString()
    let end = formatDate(new Date(endDate)).toLocaleString()
    return { stt, name, start, end, amount, tag };
}

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
}))(TableCell);

// const data=[
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '11/04/2021',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '20/04/2021',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Cứu trợ đồng bào miền trung',
//         '04/03/2020',
//         '04/06/2021',
//         150,
//         Math.trunc(Math.random() * 3),
//     ),
//     createData(
//         'Hỗ trợ đồng bào miền trung',
//         '10/23/2020',
//         '04/06/2021',
//         15000000000,
//         Math.trunc(Math.random() * 3),
//     ),
// ];

const useStyles = makeStyles({
    root: {
        margin: '5% 2% 10% 2%',
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



export default function MyTable({projects}) {
    const [data,setData] = useState([]);
    
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, _] = useState(5);
    const [rows, setRows] = useState(data)
    const [lastRows, setLastRows] = useState(data)
    const [status, setStatus] = useState("All Status")
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    useEffect(()=>{
        const temp = projects.map((project=>{
            return createData(project.event.name,project.event.startDate,project.event.endDate,project.event.amountDonated,project.event.status)
        }));
        setData(temp);
        setRows(temp.slice());
    },[])

    const filterData = (value) => {
        if (value) {
            const filtered = data.filter(d => {
                if (d.name.search(new RegExp(value, "i")) >= 0
                    || d.start.search(new RegExp(value, "i")) >= 0
                    || d.end.search(new RegExp(value, "i")) >= 0
                    || d.amount === parseInt(value)){
                        setPage(0);
                        if(status === "All Status")
                        {
                            return d;
                        }
                        else
                        {
                            if(d.tag.props.content===status)
                            {
                                return d;
                            }
                        }
                }
            });


            setRows(filtered)
        } else {
            setRows(data)
        }
        setLastRows(rows)
    }
    
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        if (event.target.value != 'All Status') {
            const filtered = lastRows.filter(d => {
                if (d.tag.props.content.search(new RegExp(event.target.value, "i")) >= 0) {
                    setPage(0)
                    return d;
                }
            });
            setRows(filtered)
        } else {
            setRows(lastRows)
        }

    };
    return (
        <Paper className={classes.root}>
            <TextField
                label="Search"
                id="outlined-size-normal"
                placeholder="Search"
                variant="outlined"
                style={{ paddingBottom: '1%', width: '80%' }}
                onChange={(e) => {
                    filterData(e.target.value)}}
            />
            <FormControl  style={{ width: '20%', paddingLeft: '2%' }} className={classes.formControl}>
            <InputLabel style={{ width: '50%', paddingLeft: '13%' }} id ="demo-simple-select-outlined-label">Status</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status}
                    onChange={handleStatusChange}
                    displayEmpty
                    className={classes.selectEmpty}>

                    <MenuItem value="All Status"> All Status</MenuItem>
                    <MenuItem value="End">End</MenuItem>
                    <MenuItem value="Processing">Processing</MenuItem>
                    <MenuItem value="Waiting">Waiting</MenuItem>
                </Select>
            </FormControl>

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
