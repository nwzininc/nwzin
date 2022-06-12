import { createSlice } from '@reduxjs/toolkit';
import _set from 'lodash/set';
import _head from 'lodash/head';
import { nanoid } from 'nanoid';
import { buttonDCM } from '../../editableComponents/editbleButton';
import { FormState } from '../formContainer';
import { colorVariationBuilder } from './helper';
import { getCurrentFormService } from './service';
import { CurrentFormState, Form, PageItem } from './types';

const getDefaultPage = () => ({
  pageItems: {
    ROOT: {
      id: 'ROOT',
      parentId: 'ROOT',
      componentId: 'ROOT',
      childNodes: ['buttonId'],
      componentType: 'LAYOUT',
      configurations: {
        settings: {
          rootStyles: {
            padding: "8px 0px 0px 16px",
          },
        },
        validations: {

        },
        dataMapping: {},
      },
    } as PageItem,
    buttonId: {
      id: 'buttonId',
      parentId: 'ROOT',
      componentId: 'button',
      childNodes: [],
      componentType: 'LAYOUT',
      configurations: {
        ...buttonDCM
      }
    } as PageItem,
  },
  pageId: nanoid(),
  pageName: ''
});
const defaultForm: Form = {
  pages: [getDefaultPage()],
  groups: [],
  assignedTo: [],
  startedOn: undefined,
  lastDateToAccceptResponse: undefined,
  isPublic: false,
  isAcceptingResponse: true,
  isPublished: false,
};
export const initialState: CurrentFormState = {
  currentForm: defaultForm,
  currentPage: defaultForm.pages[0].pageId,
  currentTheme: {
    isUpdated: false,
    primaryColor: colorVariationBuilder('#036E2C'),
    backgroundColor: colorVariationBuilder('#FFFFFF'),
  },
  currentMode: 'Desktop',
  currentSelectedField: undefined,
  subFieldId: '',
  serviceStatus: 'pristine',
  error: undefined,
};

export const currentFormSlice = createSlice({
  name: 'currentFormState',
  initialState: initialState,
  reducers: {
    clearCurrentFormState: (state) => {
      state.currentForm = initialState.currentForm;
      state.serviceStatus = 'pristine';
      state.error = undefined;
    },
    addNewChildNode: (state, action) => {
      const { childNode, parentId, droppedId } = action.payload;
      const currentPageIndex = state.currentForm.pages.findIndex((page)=> page.pageId === state.currentPage);
      const parent = state.currentForm.pages[currentPageIndex].pageItems[parentId];
      state.currentForm.pages[currentPageIndex].pageItems[childNode.id] = childNode;
      if (droppedId) {
        const droppedAtIndex = parent.childNodes.findIndex(
          (node) => node === droppedId
        );
        parent.childNodes.splice(droppedAtIndex, 0, childNode.id);
      } else {
        parent.childNodes.push(childNode.id);
      }
    },
    updateChildNodeOrder: (state, action) => {
      const currentPageIndex = state.currentForm.pages.findIndex((page)=> page.pageId === state.currentPage);
      const parent =
        state.currentForm.pages[currentPageIndex].pageItems[action.payload.parentId];
      const draggedIndex = parent.childNodes.findIndex(
        (node) => node === action.payload.draggedId
      );
      const droppedAtIndex = parent.childNodes.findIndex(
        (node) => node === action.payload.droppedId
      );
      parent.childNodes.splice(draggedIndex, 1);
      parent.childNodes.splice(droppedAtIndex, 0, action.payload.draggedId);
    },
    updateChildNode: (state, action) => {
      const currentPageIndex = state.currentForm.pages.findIndex((page)=> page.pageId === state.currentPage);
      _set(
        state.currentForm.pages[currentPageIndex].pageItems,
        action.payload.id,
        action.payload.value
      );
    },
    deleteNode: (state, action) => {
      const currentPageIndex = state.currentForm.pages.findIndex((page)=> page.pageId === state.currentPage);
      const childNodes =
        state.currentForm.pages[currentPageIndex].pageItems[action.payload.parentId]
          .childNodes;
      state.currentForm.pages[currentPageIndex].pageItems[
        action.payload.parentId
      ].childNodes = childNodes.filter(
        (childNode) => childNode !== action.payload.fieldId
      );
      state.currentSelectedField = undefined;
      state.subFieldId = '';
      delete state.currentForm.pages[currentPageIndex].pageItems[
        action.payload.fieldId
      ];
    },
    setCurrentField: (state, action) => {
      if (action.payload.currentField) {
        state.currentSelectedField = action.payload.currentField;
        state.subFieldId = action.payload.subFieldId;
      }
    },
    addNewPage: (state) => {
      const page = getDefaultPage();
      state.currentForm.pages.push(page);
      state.currentPage = page.pageId;
      state.currentSelectedField = 'ROOT';
      state.subFieldId = '';
    },
    selectPage: (state, action) => {
      state.currentPage =  action.payload.pageId;
      state.currentSelectedField = 'ROOT';
      state.subFieldId = '';
    },
    deletePage: (state, action) => {
      state.currentForm.pages = state.currentForm.pages.filter((page) =>  page.pageId !== action.payload.pageId);
      state.currentPage =  _head(state.currentForm.pages)?.pageId as unknown as string
      state.currentSelectedField = 'ROOT';
      state.subFieldId = '';
    },
    updateColorScale: (state, action) => {
      _set(state.currentTheme as unknown as FormState ,action.payload.key, action.payload.colorScale)
    },
    saveTheme: (state) => {
      state.currentTheme.isUpdated = true
    },
    updateMode: (state, action) => {
      state.currentMode = action.payload
    },
    savePublishForm: (state, action) => {
    
    },
  },
  extraReducers: {
    [getCurrentFormService.pending as unknown as string]: (state) => {
      state.serviceStatus = 'pending';
    },
    [getCurrentFormService.fulfilled as unknown as string]: (state, action) => {
      state.currentForm = action.payload.data;
      state.serviceStatus = 'fulfilled';
    },
    [getCurrentFormService.rejected as unknown as string]: (state) => {
      state.serviceStatus = 'rejected';
    },
  },
});

export const {
  clearCurrentFormState,
  addNewChildNode,
  updateChildNodeOrder,
  updateChildNode,
  setCurrentField,
  deleteNode,
  deletePage,
  addNewPage,
  selectPage,
  updateColorScale,
  saveTheme,
  updateMode,
  savePublishForm
} = currentFormSlice.actions;
