import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { faker } from "@faker-js/faker";

const addUser = createAsyncThunk("users/add", async () => {
  const response = await axios.post("http://localhost:3005/users", {
    name: faker.name.fullName(),
  });

  return response.data;
});

export { addUser };

// A thunk is a function used to delay a computation until it is needed by an application. The term thunk comes from a play on the word “think” but in the past tense.

// In JavaScript, functions are thunks since they hold a computation and they can be executed at any time or passed to another function to be executed at any time.

// A common practice is for thunks to be returned by a higher-order function. The returned thunk contains the process that is to be delayed until needed.

// In Redux thunks can be used to hold asynchronous logic that interacts with the Redux store. When thunks are dispatched to the store the enclosed asynchronous computations are evaluated before making it to the Redux store. The arguments passed to thunks are the Redux store methods dispatch and getState. This allows actions to be dispatched or for the state to be referenced within the containing logic.

// Other benefits of thunks are:

// Creating abstract logic that can interact with any Redux store
// Move complex logic out of components
