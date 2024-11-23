import { createSlice } from "@reduxjs/toolkit";
import STATUSES from "../src/globals/status/statuses";
import API from "../src/http";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    inputData: [],
    status: STATUSES.IDLE,
    deleteStatus: null,
    editStatus: false,
  },
  reducers: {
    setInputData: (state, action) => {
      state.inputData = action.payload;
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setDeleteStatus: (state, action) => {
      state.deleteStatus = action.payload;
    },
    setEditStatus: (state, action) => {
      state.editStatus = action.payload;
    },
  },
});

export const { setInputData, setStatus, setDeleteStatus, setEditStatus } = blogSlice.actions;
export default blogSlice.reducer;

// Add blog
export function addBlog(data) {
  return async function addBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.post("blog", data, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": localStorage.getItem("jwt"),
        }
      });
      if (response.status === 201) {
        dispatch(setStatus(STATUSES.SUCCESS));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// Fetch blogs
export function fetchBlog() {
  return async function fetchBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await API.get("blog");
      if (res.status === 200 && res.data.data.length > 0) {
        dispatch(setInputData(res.data.data));
        dispatch(setStatus(STATUSES.IDLE));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

// Delete blog
export function deleteBlog(id) {
  return async function deleteBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.delete(`blog/${id}`);
      if (response.status === 200) {
        dispatch(setDeleteStatus(true));
      } else {
        dispatch(setDeleteStatus(null));
      }
    } catch (error) {
      dispatch(setDeleteStatus(null));
    }
  };
}

// Edit blog
export function editBlog(data, id) {
  return async function editBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const response = await API.patch(`blog/${id}`, data, {
        headers: {
          "Authorization": localStorage.getItem("jwt"),
        },
      });
      if (response.status === 200) {
        dispatch(setEditStatus(true));
      } else {
        dispatch(setEditStatus(null));
      }
    } catch (error) {
      console.error(error);
      dispatch(setEditStatus(null));
    }
  };
}

// Fetch single blog
export function fetchSingleBlog(id) {
  return async function fetchSingleBlogThunk(dispatch) {
    dispatch(setStatus(STATUSES.LOADING));
    try {
      const res = await API.get(`blog/${id}`);
      if (res.status === 200) {
        dispatch(setStatus(STATUSES.IDLE));
        dispatch(setInputData(res.data.data));
      } else {
        dispatch(setStatus(STATUSES.ERROR));
      }
    } catch (error) {
      console.log(error?.response?.data?.message);
      dispatch(setStatus(STATUSES.ERROR));
    }
  };
}

