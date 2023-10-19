import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import createTheme from '@mui/material/styles/createTheme';
import { useNavigate } from "react-router-dom";
import { visuallyHidden } from '@mui/utils';
import { ThemeProvider } from '@mui/material/styles';
import * as locales from '@mui/material/locale';

function createData(folio, nic, fecha, origen, tramite,
  areaSolicitante, solicitante, titular, noContrato, estatus, areaRevision,
  usuarioRevision, diasTransHabiles, numRechazo, comentarios) {
  return {
    folio,
    nic,
    fecha,
    origen,
    tramite,
    areaSolicitante,
    solicitante,
    titular,
    noContrato,
    estatus,
    areaRevision,
    usuarioRevision,
    diasTransHabiles,
    numRechazo,
    comentarios
  };
}

const rows = [
  createData("folio1", "nic1", "fecha1", "origen1", "tramite1", "areaSolicitante1", "solicitante1", "titular1", "noContrato1",
    "estatus1", "areaRevision1", "usuarioRevision1", "diasTransHabiles1", "numRechazo1", "comentarios1"),
  createData("folio2", "nic2", "fecha2", "origen2", "tramite2", "areaSolicitante2", "solicitante2", "titular2", "noContrato2",
    "estatus2", "areaRevision2", "usuarioRevision2", "diasTransHabiles2", "numRechazo2", "comentarios2"),
  createData("folio3", "nic3", "fecha3", "origen3", "tramite3", "areaSolicitante3", "solicitante3", "titular3", "noContrato3",
    "estatus3", "areaRevision3", "usuarioRevision3", "diasTransHabiles3", "numRechazo3", "comentarios3"),
  createData("folio4", "nic4", "fecha4", "origen4", "tramite4", "areaSolicitante4", "solicitante4", "titular4", "noContrato4",
    "estatus4", "areaRevision4", "usuarioRevision4", "diasTransHabiles4", "numRechazo4", "comentarios4"),
  createData("folio5", "nic5", "fecha5", "origen5", "tramite5", "areaSolicitante5", "solicitante5", "titular5", "noContrato5",
    "estatus5", "areaRevision5", "usuarioRevision5", "diasTransHabiles5", "numRechazo5", "comentarios5"),
  createData("folio6", "nic6", "fecha6", "origen6", "tramite6", "areaSolicitante6", "solicitante6", "titular6", "noContrato6",
    "estatus6", "areaRevision6", "usuarioRevision6", "diasTransHabiles6", "numRechazo6", "comentarios6"),
  createData("folio7", "nic7", "fecha7", "origen7", "tramite7", "areaSolicitante7", "solicitante7", "titular7", "noContrato7",
    "estatus7", "areaRevision7", "usuarioRevision7", "diasTransHabiles7", "numRechazo7", "comentarios7"),
  createData("folio8", "nic8", "fecha8", "origen8", "tramite8", "areaSolicitante8", "solicitante8", "titular8", "noContrato8",
    "estatus8", "areaRevision8", "usuarioRevision8", "diasTransHabiles8", "numRechazo8", "comentarios8"),
  createData("folio9", "nic9", "fecha9", "origen9", "tramite9", "areaSolicitante9", "solicitante9", "titular9", "noContrato9",
    "estatus9", "areaRevision9", "usuarioRevision9", "diasTransHabiles9", "numRechazo9", "comentarios9"),
  createData("folio10", "nic10", "fecha10", "origen10", "tramite10", "areaSolicitante10", "solicitante10", "titular10", "noContrato10",
    "estatus10", "areaRevision10", "usuarioRevision10", "diasTransHabiles10", "numRechazo10", "comentarios10"),
  createData("folio11", "nic11", "fecha11", "origen11", "tramite11", "areaSolicitante11", "solicitante11", "titular11", "noContrato11",
    "estatus11", "areaRevision11", "usuarioRevision11", "diasTransHabiles11", "numRechazo11", "comentarios11"),
  createData("folio12", "nic12", "fecha12", "origen12", "tramite12", "areaSolicitante12", "solicitante12", "titular12", "noContrato12",
    "estatus12", "areaRevision12", "usuarioRevision12", "diasTransHabiles12", "numRechazo12", "comentarios12"),
  createData("folio13", "nic13", "fecha13", "origen13", "tramite13", "areaSolicitante13", "solicitante13", "titular13", "noContrato13",
    "estatus13", "areaRevision13", "usuarioRevision13", "diasTransHabiles13", "numRechazo13", "comentarios13"),
  createData("folio14", "nic14", "fecha14", "origen14", "tramite14", "areaSolicitante14", "solicitante14", "titular14", "noContrato14",
    "estatus14", "areaRevision14", "usuarioRevision14", "diasTransHabiles14", "numRechazo14", "comentarios14"),
  createData("folio15", "nic15", "fecha15", "origen15", "tramite15", "areaSolicitante15", "solicitante15", "titular15", "noContrato15",
    "estatus15", "areaRevision15", "usuarioRevision15", "diasTransHabiles15", "numRechazo15", "comentarios15"),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'folio',
    numeric: false,
    disablePadding: false,
    label: 'Folio',
  },
  {
    id: 'nic',
    numeric: false,
    disablePadding: false,
    label: 'NIC',
  },
  {
    id: 'fecha',
    numeric: false,
    disablePadding: false,
    label: 'Fecha',
  },
  {
    id: 'origen',
    numeric: false,
    disablePadding: false,
    label: 'Origen',
  },
  {
    id: 'tramite',
    numeric: false,
    disablePadding: false,
    label: 'Tramite',
  },
  {
    id: 'areaSolicitante',
    numeric: false,
    disablePadding: false,
    label: 'Área solicitante',
  },
  {
    id: 'solicitante',
    numeric: false,
    disablePadding: false,
    label: 'Solicitante',
  },
  {
    id: 'titular',
    numeric: false,
    disablePadding: false,
    label: 'Titular / Nombre del cliente / Razón social',
  },
  {
    id: 'noContrato',
    numeric: false,
    disablePadding: false,
    label: 'No. Contrato',
  },
  {
    id: 'estatus',
    numeric: false,
    disablePadding: false,
    label: 'estatus',
  },
  {
    id: 'areaRevision',
    numeric: false,
    disablePadding: false,
    label: 'Área de revisión',
  },
  {
    id: 'usuarioRevision',
    numeric: false,
    disablePadding: false,
    label: 'Usuario de revisión',
  },
  {
    id: 'diasTransHabiles',
    numeric: false,
    disablePadding: false,
    label: 'Días transcurridos hábiles',
  },
  {
    id: 'numRechazo',
    numeric: true,
    disablePadding: false,
    label: 'Número de rechazo',
  },
  {
    id: 'comentarios',
    numeric: true,
    disablePadding: false,
    label: 'Comentarios / Motivo del estatus',
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const handleClickExport = (event) => {
  console.log('export');
};

function EnhancedTableToolbar() {
  return (
    <Toolbar
      sx={{
        minHeight: '50px',
        paddingBottom: 1,
        paddingTop: 1,
        bgcolor: '#fff'
      }}
    >
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id=""
        component="div"
      >
        Tramites
      </Typography>
      <Tooltip title="Exportar" sx={{display: 'none'}}>
        <IconButton onClick={(event) => handleClickExport(event)}>
          <FileDownloadIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
}

EnhancedTableHead.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const TableTramites = (props) => {

  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  // eslint-disable-next-line
  const [locale, setLocale] = React.useState('esES');
  // eslint-disable-next-line
  const [id, setId] = React.useState(props.id);
  // eslint-disable-next-line
  const [user, setUser] = React.useState(props.user);

  const navigate = useNavigate();

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClickTramite = (event, folio, titular) => {
    navigate('/tramite/' + id + '/' + user + '/' + folio + '/' + titular);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(() =>
    stableSort(rows, getComparator(order, orderBy)).slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage,
    ),
    [order, orderBy, page, rowsPerPage],
  );

  const theme = createTheme({
    components: {
      MuiTableHead: {
        styleOverrides: {
          root: {
            backgroundColor: '#386641',
            color: '#fff',
            borderColor: '#bc4749',
            '& .MuiTableCell-root': {
              borderColor: '#bc4749',
              color: '#fff',
              backgroundColor: '#000080'
            },
            "& .MuiTableCell-root:hover": {
              backgroundColor: '#0000AE',
              color: '#fff',
            },
          },
        },
      },
      MuiTableCell: {
        styleOverrides: {
          root: {
            borderBottom: '2px solid #000080'
          },
        },
      },
      MuiTableSortLabel: {
        styleOverrides: {
          root: {
            color: '#fff',
            '&.MuiTableSortLabel-root': {
              color: 'white',
            },
            '&.MuiTableSortLabel-root:hover': {
              color: '#fff',
            },
            '&.MuiTableSortLabel-active': {
              color: '#fff',
            },
            '& .MuiTableSortLabel-icon': {
              color: '#fff !important',
            },
          },
        },
      }
    },
  });

  const themeWithLocale = React.useMemo(() =>
    createTheme(theme, locales[locale]),
    [locale, theme],
  );

  return (
    <Box sx={{ paddingBottom: 5 }} >
      <ThemeProvider theme={themeWithLocale}>
        <Paper sx={{ width: '100%', overflow: 'auto' }}>
          <EnhancedTableToolbar />
          <TableContainer >
            <Table
              aria-labelledby="tableTramitesToolbarTitle"
              size='small'
              stickyHeader aria-label="sticky table"
              sx={{ width: '200%', maxHeight: 440, overflow: 'auto' }}
            >
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
              />
              <TableBody>
                {visibleRows.map((row, index) => {
                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClickTramite(event, row.folio, row.titular)}
                      role="cell"
                      tabIndex={-1}
                      key={row.folio}
                      sx={{ cursor: 'pointer', border: '1px solid gray' }}
                    >
                      <TableCell align="center">{row.folio}</TableCell>
                      <TableCell align="center">{row.nic}</TableCell>
                      <TableCell align="center">{row.fecha}</TableCell>
                      <TableCell align="center">{row.origen}</TableCell>
                      <TableCell align="center">{row.tramite}</TableCell>
                      <TableCell align="center">{row.areaSolicitante}</TableCell>
                      <TableCell align="center">{row.solicitante}</TableCell>
                      <TableCell align="center">{row.titular}</TableCell>
                      <TableCell align="center">{row.noContrato}</TableCell>
                      <TableCell align="center">{row.estatus}</TableCell>
                      <TableCell align="center">{row.areaRevision}</TableCell>
                      <TableCell align="center">{row.usuarioRevision}</TableCell>
                      <TableCell align="center">{row.diasTransHabiles}</TableCell>
                      <TableCell align="center">{row.numRechazo}</TableCell>
                      <TableCell align="center">{row.comentarios}</TableCell>
                    </TableRow>
                  );
                })}
                {emptyRows > 0 && (
                  <TableRow
                    style={{
                      height: 33 * emptyRows,
                    }}
                  >
                    <TableCell colSpan={15} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </ThemeProvider>
    </Box>
  );
}

export default TableTramites;