// modules
import React, { useContext } from 'react';
import styled from 'styled-components';
import { H2 } from './h2';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// context
import { ctx } from '../pages/top';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '60%',
      outline: 'none',
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '3px',
      display: 'flex',
      flexWrap: 'wrap',
      flexDirection: 'column'
    },
  }),
);

export const DiaryEdit: React.FC = () => {
  const classes = useStyles();
  const { editOpen, setEditOpen, displayDate } = useContext(ctx);

  return (
    <Modal
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={editOpen}
      onClose={() => setEditOpen(false)}
    >
      <div className={classes.paper}>
        <StyledH2>{displayDate.replace(/-/g, '月') + '日の日記'}</StyledH2>
        <StyledTextField
          label="Title"
          variant="outlined"
          autoFocus
        />
        <StyledTextField
          multiline
          rows={15}
          label="Body"
          variant='outlined'
        />
        <Button variant="contained" color="primary" onClick={() => setEditOpen(false)}>保存する</Button>
      </div>
    </Modal>
  );
}

const StyledH2 = styled(H2)`
  text-align: center;
  margin-bottom: 10px;
`;

const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 10px;
  }
`;
