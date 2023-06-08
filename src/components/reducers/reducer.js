function reducer(
  state = {
    hodimlar: [
      {
        id: 1,
        ismi: "Abdulloh",
        familiya: "karimov",
        telefon: +99899999999,
        lavozim: "Junior",
        ilmiy_Daraja: "Manager",
      },
      {
        id: 2,
        ismi: "Zubayr",
        familiya: "Hamidov",
        telefon: +99893555625,
        lavozim: "Middle",
        ilmiy_Daraja: "TeamLeader",
      },
      {
        id: 3,
        ismi: "Umar",
        familiya: "Xattob",
        telefon: +99874412306,
        lavozim: "Senior",
        ilmiy_Daraja: "Developer",
      },
      {
        id: 4,
        ismi: "Zakariyyo",
        familiya: "Fatxullayev",
        telefon: +99891255633,
        lavozim: "Middle",
        ilmiy_Daraja: "Programer",
      },
    ],
    data: "",
    editData: "",
    editUsers: "",
    search: "",
    lavozim: [
      { id: 1, title: "Teamleader", maosh: "300" },
      { id: 2, title: "Manager", maosh: "500" },
      { id: 3, title: "Developer", maosh: "100" },
    ],
    ilmiyDaraja: [
      { id: 1, nomi: "Middle", bonus: 100 },
      { id: 2, nomi: "Junior", bonus: 200 },
      { id: 3, nomi: "Senior", bonus: 500 },
    ],
  },
  action
) {
  switch (action.type) {
    case "XODIMLAR":
      const arr = [...state.hodimlar];
      arr.push({
        id: state.hodimlar.length + 1,
        ismi: action.FirstName,
        familiya: action.LastName,
        telefon: action.Phone,
        lavozim: action.Select,
        ilmiy_Daraja: action.Ilmiy_Daraja,
      });
      return { ...state, hodimlar: [...arr] };
      break;
    case "EDIT_XODIMLAR":
      state = { ...state, data: action.edit };
      break;
    case "SavEdit":
      let a = state.hodimlar.map((item) => {
        var b = state.data;

        if (item.id === b.id) {
          item = {
            ...item,
            ismi: action.value.FirstName,
            familiya: action.value.LastName,
            telefon: action.value.Phone,
            lavozim: action.value.Select,
            ilmiy_Daraja: action.value.Ilmiy_Daraja,
          };
        }

        return item;
      });

      state = { ...state, hodimlar: a };
      break;
    case "DELETE":
      const d = [...state.hodimlar];
      d.splice(action.id, 1);
      state = { ...state, hodimlar: d };
      break;

    case "Search":
      state = { ...state, search: action.value };
      break;
    case "AddLavozim":
      const arrLavozim = [...state.lavozim];
      arrLavozim.push({
        id: state.lavozim.length + 1,
        title: action.Lavozim,
        maosh: action.Maosh,
      });
      return { ...state, lavozim: [...arrLavozim] };
      break;
    case "SEARCHLAVOZIM":
      state = { ...state, search: action.value };
      break;
    case "DELETELAVOZIM":
      const f = [...state.lavozim];
      f.splice(action.id, 1);
      state = { ...state, lavozim: f };
      break;
    case "EDITLAVOZIM":
      state = { ...state, editData: action.editUser };
      break;
    case "editSaveUser":
      const editUsers = state.lavozim.map((item) => {
        const c = state.editData;

        if (item.id === c.id) {
          item = {
            ...item,
            title: action.value.Lavozim,
            maosh: action.value.Maosh,
          };
        }
        return item;
      });
      state = { ...state, lavozim: editUsers };
      break;
                               
    case "SearchDaraja":
      state = { ...state, search: action.event };
      break;
    case "ADDDARJA":
      const daraja = [...state.ilmiyDaraja];
      daraja.push({
        id: state.ilmiyDaraja.length + 1,
        nomi: action.Nomi,
        bonus: action.Bonus,
      });
      return { ...state, ilmiyDaraja: [...daraja] };
      break;
    case "DELETEDARAJA":
      const del = [...state.ilmiyDaraja];
      del.splice(action.id, 1);
      state = { ...state, ilmiyDaraja: del };
      break;
    case "EDITUSERS":
      state = { ...state, editUsers: action.change };
      break;
    case "SAVEEDIT":
      const z = state.ilmiyDaraja.map((item) => {
        const da = state.editUsers;
        if (item.id === da.id) {
          item = {
            ...item,
            nomi: action.val.Nomi,
            bonus: action.val.Bonus,
          };
        }
        return item;
      });
      state = { ...state, ilmiyDaraja: z };
  }
  return state;
}

export default reducer;
