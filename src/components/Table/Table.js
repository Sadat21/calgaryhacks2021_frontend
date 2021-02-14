import React, {useEffect, useState} from 'react';
import {withStyles, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {getAuth, getDb} from '../../lib/Firebase';
import {TextField} from "@material-ui/core";


const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);


function createData(firstName, lastName, email, phone) {
    return {firstName, lastName, email, phone};
}

let rows = [
    createData('Raiyan', 'Kabir', 'raiyankabir23@gmail.com', '825-994-5968'),
    createData('John', 'Doe', 'jd23@gmail.com', '403-444-2222'),

];

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();

    const [search, setSearch] = useState("")
    const [data, setData] = useState([])

    const [displayData, setDisplayData] = useState(data)

    let rows = [
        createData('Raiyan', 'Kabir', 'raiyankabir23@gmail.com', '825-994-5968'),
        createData('John', 'Doe', 'jd23@gmail.com', '403-444-2222'),

    ];

    useEffect(() => {
        getDb().collection("Customers").onSnapshot((doc) => {
            const customers = doc.docs.map(document => {
                return document.data();
            })

            console.log(customers);
            setData(customers)
        })
    }, [data]);

    useEffect(() => {
        setDisplayData(data)

    }, [data]);

    useEffect(() => {
        const newData = data.filter((x) => {
            console.log(x)
        });
        setDisplayData(newData)
    }, [search])

    return (
        <TableContainer component={Paper}>
            <TextField id="standard-basic" label="Standard" value={search} onChange={(event) => {
                setSearch(event.target.value);
            }}/>
            <Table classfirstName={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell align="justify">Last Name</StyledTableCell>
                        <StyledTableCell align="justify">Email</StyledTableCell>
                        <StyledTableCell align="left" padding="default">Phone</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {displayData.map((row) => (
                        <StyledTableRow key={row.firstName}>
                            <StyledTableCell component="th" scope="row">
                                {row.firstName}
                            </StyledTableCell>
                            <StyledTableCell align="left">{row.lastName}</StyledTableCell>
                            <StyledTableCell align="left">{row.email}</StyledTableCell>
                            <StyledTableCell align="left">{row.phone}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
