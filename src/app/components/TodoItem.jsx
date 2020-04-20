import cx from 'classnames';
import React, { useContext, useEffect, useState } from 'react';

import { TodosContext } from '../features/TodosContext';
import ButtonIcon from './ButtonIcon';
import Icon from './Icon';
import TodoForm from './TodoForm';

const TodoItem = ({ todo }) => {
  /* TODO: write the TodoItem function component
  
    Actions: 
    ------------------------------
    - clicking on the note or the checkbox makes the todo "archived/unarchived"
    - clicking on the "edit" button:
      - replaces the note and checkbox with the `TodoForm` component
      - replaces the "edit" button with a "cancel" button
      - hides the "delete" button
    - clicking on the "delete" button asks for confirmation (native `confirm()` function) before deleting the note
    - when on "edit" mode, submitting the form hides the form and shows the updated note
      -> HINT: you may need to pass an additional property to the `TodoForm` component
    - BONUS: pressing on "Escape" cancels the edit form and shows the original note

    Notes:
    ------------------------------
    - `TodoItem` component has to be a Function Component
    - `TodoItem` component takes only one property: `todo`
    - You don't need to import anything else, all the imports you need have been declared above
    - Use the `ButtonIcon` component to make your buttons
    - Prefer using the `Icon` component to make a beautiful checkbox
    - Buttons should be aligned to the right, no matter the screen size
  */
  return null; //TODO: remove this line
};

export default TodoItem;