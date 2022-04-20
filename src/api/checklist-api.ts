import axios from "axios";

import _ from 'lodash';
import { CheckListItemModel } from "../model";

export const getChecklistAPI = async () =>
    await axios.get<Array<CheckListItemModel>>("localhost:8080/api/checklist/").then((val) => console.log(val)).catch((err) => console.log(err));
