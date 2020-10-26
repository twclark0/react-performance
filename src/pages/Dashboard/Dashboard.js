import { Bar, Bubble } from "react-chartjs-2";
import { NewsCard, StatCard, Wrapper } from "../../components";
import React, { useState } from "react";
import { mockDashboard, mockFeed } from "../../utils/mock";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import EmailIcon from "@material-ui/icons/Email";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreIcon from "@material-ui/icons/More";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/Notifications";
import NotificationsOffIcon from "@material-ui/icons/NotificationsOff";
import Paper from "@material-ui/core/Paper";
import PhoneIcon from "@material-ui/icons/Phone";
import SettingsIcon from "@material-ui/icons/Settings";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Typography } from "@material-ui/core";

let id = 0;
function createData(name, date, progress) {
  id += 1;
  return { id, name, date, progress };
}

const data = [
  createData("Shirts", "January 23", 67),
  createData("Shorts", "February 2", 87),
  createData("Watches", "March 30", 54),
  createData("Bracelets", "April 12", 34),
  createData("Shoes", "May 28", 56),
  createData("Fragrances", "December 3", 56),
  createData("Cups", "December 25", 56)
];

const Home = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const chartMenu = (
    <Menu
      id="chart-menu"
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <MoreIcon />
        </ListItemIcon>
        <ListItemText primary="View more" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <NotificationsOffIcon />
        </ListItemIcon>
        <ListItemText primary="Disable notifications" />
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="Remove panel" />
      </MenuItem>
    </Menu>
  );

  return (
    <Wrapper>
      <Typography style={{ margin: "20px 0" }} variant="h4">
        Dashboard
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Campaigns"
            value={103}
            icon={<LocalOfferIcon />}
            color="#335c67"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Orders"
            value={323}
            icon={<NotificationsIcon />}
            color="#e09f3e"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Customers"
            value={230}
            icon={<PhoneIcon />}
            color="#9e2a2b"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            type="fill"
            title="Opens"
            value={870}
            icon={<EmailIcon />}
            color="#ffd740"
          />
        </Grid>
        {chartMenu}
        {mockDashboard.map((chart, index) => (
          <Grid item xs={12} sm={12} md={4} key={index}>
            <Card>
              <CardHeader
                subheader={chart.title}
                action={
                  <IconButton id={`${index}-menu-button`} onClick={handleClick}>
                    <MoreVertIcon />
                  </IconButton>
                }
              />
              <CardContent>
                {chart.type === "bar" && (
                  <Bar
                    data={chart.data}
                    height={chart.height}
                    options={chart.options}
                  />
                )}
                {chart.type === "bubble" && (
                  <Bubble
                    data={chart.data}
                    height={chart.height}
                    options={chart.options}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12} sm={12} md={12}>
          <Paper className="table-responsive">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Products</TableCell>
                  <TableCell>Order Date</TableCell>
                  <TableCell>Inventory</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((n) => (
                  <TableRow key={n.id}>
                    <TableCell component="th" scope="row">
                      {n.name}
                    </TableCell>
                    <TableCell>{n.date}</TableCell>
                    <TableCell>
                      {
                        <LinearProgress
                          variant="determinate"
                          value={n.progress}
                        />
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <NewsCard subtitle="Last updated 24 mins ago" feed={mockFeed} />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

export default Home;
