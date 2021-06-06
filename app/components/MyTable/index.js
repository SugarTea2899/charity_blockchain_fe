import React from 'react';
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
import Tag from '../Tag';
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

function createData(name, start, end, amount, status) {
  stt += 1;
  let tag;
  if (status === 1 || status === 2) {
    tag = <Tag content="End" backGroundColor="#2980b9" textColor="white" />;
  }

  if (status === 0) {
    tag = (
      <Tag content="Processing" backGroundColor="#efcf71" textColor="#c12a2a" />
    );
  }

  if (status === -1) {
    tag = <Tag content="Waiting" backGroundColor="#999999" />;
  }

  return { stt, name, start, end, amount, tag };
}

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
}))(TableCell);

const rows = [
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
  createData(
    'Cứu trợ đồng bào miền trung',
    '20/10/2020',
    '04/06/2021',
    15000000000,
    -1 + Math.trunc(Math.random() * 3),
  ),
];

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

export default function MyTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, _] = React.useState(10);

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
