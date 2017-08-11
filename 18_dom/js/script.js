(function () {
    var students = [{
            name: 'Liudmyla',
            lastName: 'Bashta',
            img: 'https://www.plagiarismtoday.com/wp-content/uploads/2016/07/nyancat-385-sized.jpg',
            coverImg: 'http://i2.kym-cdn.com/photos/images/facebook/000/243/865/8f3.jpg',
            email: 'liudmyla.bashta@gmail.com',
            skills: ['Javascript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Chapkailo',
            img: 'https://s-media-cache-ak0.pinimg.com/736x/76/47/9d/76479dd91dc55c2768ddccfc30a4fbf5--pikachu-halloween-costume-diy-halloween-costumes.jpg',
            coverImg: 'http://fbcovershub.com/media/cover-250-beautiful-seaside-fb-cover-1388015476.jpg',
            email: 'romafromukraine@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystyna',
            lastName: 'Dalivska',
            img: 'https://ichef-1.bbci.co.uk/news/660/cpsprodpb/169F6/production/_91026629_gettyimages-519508400.jpg',
            coverImg: 'https://sky.easypano.com/EPSUpload2/Pano/2017/04-12/12/636275969355928205/560_315.jpg',
            email: 'khrystynadalivska@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Ivan',
            lastName: 'Gnatyshyn',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'gnatyshyn.ivan@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: "Hun'ka",
            img: 'https://cdn.pixabay.com/photo/2017/01/06/19/15/soap-bubble-1958650_960_720.jpg',
            coverImg: 'http://i.dailymail.co.uk/i/pix/2017/01/16/20/332EE38400000578-4125738-image-a-132_1484600112489.jpg',
            email: 'andriyggg@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Maksym',
            lastName: 'Izmailov',
            img: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497_960_720.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/03/06/05/03/sunrise-1239728_960_720.jpg',
            email: 'maksym.izmailov.lv@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Taras',
            lastName: 'Kharkhalis',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'taraskharkhalis97@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Khrystia',
            lastName: 'Kondratovych',
            img: 'https://www.webdesign.org/img_articles/21726/17.jpg',
            coverImg: 'https://cdn.pixabay.com/photo/2016/10/13/10/37/dandelion-1737324_960_720.jpg',
            email: 'khrustyk@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Iuliia',
            lastName: 'Kurylo',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSljkhtuNjmEz2YeriPLPdntnTKNAwXFOAQSx1u6yAkPhYYw8-Pnw',
            coverImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-qepvLICH8tsGuZqbZwpO7rk5afp274Lu4bgjai8Uo30gDKifA',
            email: 'iulia.kurylo@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Roman',
            lastName: 'Mandziuk',
            img: 'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg',
            coverImg: 'http://html.com/wp-content/uploads/very-large-flamingo.jpg',
            email: 'rmandzyuk94@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Oleh',
            lastName: 'Marko',
            img: 'https://www.petdrugsonline.co.uk/images/page-headers/cats-master-header',
            coverImg: 'http://wiki-carpathians.com/wp-content/uploads/2015/02/climate-carpathians.jpg',
            email: 'olehmarko@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anatoliy',
            lastName: 'Mazur',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'mail4tolik@gmail.com',
            skills: ['JavaScript', 'CSS', 'HTML']
        },
        {
            name: 'Vitaliy',
            lastName: 'Palyushok',
            img: 'https://www.mammoth.com.au/res/images/mammothcloud/person-img.png',
            coverImg: 'http://facebookcovers.piz18.com/wp-content/uploads/2012/04/geek-fb-cover.jpg',
            email: 'xskeletons@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Prokopiak',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'sprokopyak96@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Stepan',
            lastName: 'Sendun',
            img: 'http://i.piccy.info/i9/a25aa836358fb23a05d6e9207c976dd9/1500482900/30480/1163444/537377255ws00241_57th_annua.jpg',
            coverImg: 'http://i.piccy.info/i9/b311de1aaff52532b361a178e8e35de4/1500482959/135850/1163444/0008540461_10.jpg',
            email: 'steve.neeson21@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrii',
            lastName: 'Soroka',
            img: '',
            coverImg: '',
            email: '',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Illya',
            lastName: 'Syniuk',
            img: 'https://www.facebook.com/photo.php?fbid=578754465640942&set=a.317602991756092.1073741826.100005191805447&type=3&theater',
            coverImg: 'https://www.facebook.com/photo.php?fbid=578802345636154&set=a.326403767542681.1073741828.100005191805447&type=3&theater',
            email: 'illyasynuik@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Andrew',
            lastName: 'Tantsiura',
            img: 'https://cdn.pixabay.com/photo/2014/03/29/09/17/cat-300572_960_720.jpg',
            coverImg: 'https://static.pexels.com/photos/9135/sky-clouds-blue-horizon.jpg',
            email: 'andrii.tans@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Liliya',
            lastName: 'Tserkovna',
            img: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-1/c0.17.160.160/p160x160/14725559_311214412585028_1352062715786494390_n.jpg?oh=b2cbcb3de774187b75d5253a276bc2f7&oe=59F5D47B',
            coverImg: 'https://scontent-frx5-1.xx.fbcdn.net/v/t1.0-9/14368772_295189700854166_8626244722206545788_n.jpg?oh=02cf7516f9337bc439a42595ff893821&oe=5A051EC4',
            email: 'lilichkaTserkovna@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        },
        {
            name: 'Anton',
            lastName: 'Zhygalov',
            img: 'http://static.tvtropes.org/pmwiki/pub/images/Hello_Kitty_Pink_2981.jpg',
            coverImg: 'https://thumb1.shutterstock.com/display_pic_with_logo/156640/208511908/stock-photo-arad-romania-september-hello-kitty-pattern-printed-on-cardboard-box-studio-shot-208511908.jpg',
            email: 'antonzhygalov@gmail.com',
            skills: ['JavaScript', 'HTML', 'CSS']
        }
    ];
    
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    table.classList.add("table","table-hover");
    let titles = ["Student","Email","Profile picture","Skils","Controls"];
    let studentsMap = [];
    mapStudents();
    let tr = document.createElement("tr");
    titles.forEach(el => {
        let th = document.createElement("th");
        let text = document.createTextNode(el);
        th.appendChild(text);
        if(el !== "Controls") {
            let span = document.createElement("span");
            span.classList.add("glyphicon", "glyphicon-sort");
            th.appendChild(span);
        }
        tr.appendChild(th);
        thead.appendChild(tr);
    });
    table.appendChild(thead);
    addRows(studentsMap);
    table.appendChild(tbody);
    let container = document.getElementById("container");
    container.appendChild(table);
    createForm();
    let editRow; // needed for saving row that needs to be edited


    function mapStudents () {
        students.forEach(el => {
            let studentObj = {};
            studentObj.fullName = `${el.name} ${el.lastName}`;
            studentObj.email = el.email;
            studentObj.picture = el.img;
            studentObj.skills = el.skills;
            studentsMap.push(studentObj);
        });
    }
    function mappedStudent (arr) {
        let studentObj = {};
        studentObj.fullName = arr[0];
        studentObj.email = arr[1];
        studentObj.picture = arr[2];
        studentObj.skills = arr[3];
        return studentObj;
    }
    function deleteRows () {
        let tbody = document.getElementsByTagName("tbody")[0];
        let rows = tbody.childNodes;
        tbody.removeChild(rows[1]);
        for (let i = rows.length - 1 ; i >= 0 ; i--) {
            tbody.removeChild(rows[i]);
        }  
    }
    function addRows(arr) {
        let elements = [];
        if(!Array.isArray(arr)) {
            elements.push(arr)
        } else {
            elements = arr;
        }
        elements.forEach(el => {
            let tr = document.createElement("tr");
            for (let prop in el) {
                let td = document.createElement("td");
                if (prop === "picture") {
                    let picture = document.createElement("img");
                    picture.src = el[prop];
                    td.appendChild(picture);
                } else {
                    let text = document.createTextNode(el[prop]);
                    td.appendChild(text);
                }
                tr.appendChild(td);
            }
            let controls = document.createElement("td");     //creating cell controls
            let edit = document.createElement("button");
            let remove = document.createElement("button");
            edit.classList.add('glyphicon', 'glyphicon-edit', 'edit'); 
            remove.classList.add('glyphicon', 'glyphicon-trash', 'remove');
            controls.appendChild(edit);
            controls.appendChild(remove);
            tr.appendChild(controls);
            tbody.appendChild(tr);
        });
    }
    function createForm () {
        let form = document.createElement("form");
        form.setAttribute("id", "editForm");
        for(let i = 0 ; i < titles.length - 1 ; i++) {                  
            if(titles[i] === "Student") {
                let firstName = document.createElement("input");
                let firstNameLabel = document.createElement("label");
                let lastName = document.createElement("input");
                let lastNameLabel = document.createElement("label");
                firstName.setAttribute("type", "text");
                firstName.setAttribute("id", "firstName");
                firstName.setAttribute("required","");
                firstNameLabel.setAttribute("for", "firstName");
                firstNameLabel.appendChild(document.createTextNode("First name"));
                lastName.setAttribute("type", "text");
                lastName.setAttribute("id", "lastName");
                lastName.setAttribute("required","");
                lastNameLabel.setAttribute("for", "lastName");
                lastNameLabel.appendChild(document.createTextNode("Last name"));
                form.appendChild(firstNameLabel);
                form.appendChild(firstName);
                form.appendChild(lastNameLabel);
                form.appendChild(lastName);
            } else {
                let input = document.createElement("input");
                let label = document.createElement("label");
                input.setAttribute("type", "text");
                input.setAttribute("id", titles[i]);
                label.setAttribute("for", titles[i]);
                label.appendChild(document.createTextNode(titles[i]));
                if (titles[i] === "Email") {
                    input.setAttribute("type", "email");
                    input.setAttribute("required","");
                }
                if (titles[i] === "Profile picture") {
                    input.setAttribute("type", "url");
                    input.setAttribute("required","");
                }
                form.appendChild(label);
                form.appendChild(input); 
            }    
        }
        let saveButton = document.createElement("input");
        let cancelButton = document.createElement("input");
        saveButton.setAttribute("type", "submit");
        cancelButton.setAttribute("type", "reset");
        saveButton.setAttribute("value", "Save");
        cancelButton.setAttribute("value", "Cancel");
        saveButton.setAttribute("id", "save");
        cancelButton.setAttribute("id", "cancel");
        form.appendChild(saveButton);
        form.appendChild(cancelButton);
        container.insertBefore(form,table)
    }
    function showName(event) {
        let target = event.target;
        if (target.tagName === "IMG") {
            target = target.parentNode;
        }
        target = target.parentNode;
        alert(target.firstChild.innerHTML); 
    }


    function remove(event) {
        let row = event.target.parentNode.parentNode;
        let table = row.parentNode;
        let name = row.firstChild.innerHTML.split(" ");
        students.forEach( el => {                                   // removing student from the students array
            if(el.name === name[0] && el.lastName === name[1]) {
                let removeIndex = students.indexOf(el);
                students.splice(removeIndex,1);
                studentsMap.splice(removeIndex,1);
            }
        });
        mapStudents(); //updating info to the studentsMap
        table.removeChild(row);   
    }

    function edit(event) {
        let cell = event.target.parentNode;
        editRow = cell.parentNode;
        let formChilds = document.getElementsByTagName("form")[0].childNodes;
        let cells = editRow.childNodes;
        let inputs = [];
        formChilds.forEach((el) => {
            if(el.type === "text" || el.type === "email" || el.type === "url") {
                inputs.push(el);
            }
        });
        for (let i = 0 ; i < cells.length - 1 ; i++) {   //taking info from the target row and putting into form inputs
            if (i === 0) {
                [inputs[0].value, inputs[1].value] = cells[i].innerHTML.split(" ");// [input0, input1] = [name, lastName]
                continue;
            }
            if(cells[i].firstChild.tagName === "IMG") {
                inputs[i+1].value = cells[i].firstChild.src;
                continue
            }
            inputs[i+1].value = cells[i].innerHTML;
        }
    }


    function save() {
        let form = document.getElementById("editForm");
        let formChilds = form.childNodes;
        let info = [];
        formChilds.forEach( el => {     // taking info from form inputs
            if(el.type === "text" || el.type === "email" || el.type === "url") {
                info.push(el.value);
            }

        });
        let isExist = false;
        let editStudentIndex;
        for (let i = 0 ; i < students.length ; i++) {
            if(students[i].name === info[0] && students[i].lastName === info[1]) { //cheking if student name and last name already exist in students array
                isExist = true;
                editStudentIndex = i;  
                break;
            }
        }
        let editObject = studentsObj(info);
        info.splice(0,2,`${info[0]} ${info[1]}`);// making first element "name lastName"
        let isEdited = false;
        if (isExist) {
            let editCells = editRow.childNodes;
            for(let i = 1 ; i < editCells.length - 1 ; i++) { //starting from the second cell, because student exist in students array
                if(editCells[i].innerHTML !== info[i] && editCells[i].firstChild.tagName !== "IMG") {
                    let newTd = document.createElement("td");
                    let text = document.createTextNode(info[i]);
                    newTd.appendChild(text);
                    editRow.replaceChild(newTd,editCells[i]);
                    isEdited = true;
                }
                if(editCells[i].firstChild.tagName === "IMG" && editCells[i].firstChild.src !== info[i]) { 
                    let newTd = document.createElement("td");
                    let img = document.createElement("img");
                    img.src = info[i];
                    newTd.appendChild(img);
                    editRow.replaceChild(newTd,editCells[i]);
                    isEdited = true;
                }
            }
            // editing student in students array
            if(isEdited) {
                studentsMap.splice(editStudentIndex,1,mappedStudent(info));
                students.splice(editStudentIndex,1,editObject);
            }
        } else {
            let newStudent = mappedStudent(info);
            studentsMap.push(mappedStudent(info));
            addRows(newStudent);   
            students.push(editObject);
        }
    }
    
    function studentsObj(info) {
        let editObject = {};
        editObject.name = info[0];
        editObject.lastName = info[1];
        editObject.email = info[2];
        editObject.coverImg = info[3];
        editObject.image = info[3];
        editObject.skills = info[4];
        return editObject
    }

    function action(event) {
        let target = event.target;
        switch (target.tagName) {
            case "BUTTON" : 
                if (target.classList.contains("remove")) {
                    remove(event);
                }
                if (target.classList.contains("edit")) {
                    edit(event);
                }
                break;
            default :
                showName(event);
                break;
        }
    }
    function sort(event) {
        let target = event.target;
        let span;
        if (target.tagName === "SPAN") {
            span = target;
            target = target.parentNode;
        } else {
            span = target.lastChild;
        }
        if(event.target.innerHTML !== "Controls") {
            let sortBy = target.innerHTML;
            let cells = target.parentNode.childNodes;
            let sortedColumn;
            for (let i = 0; i < cells.length; i++) {
                if (cells[i].innerHTML === sortBy) {
                    sortedColumn = i;
                    break;
                }
            }
            let sortProp = Object.getOwnPropertyNames(studentsMap[0])[sortedColumn];
            if(!target.classList.contains("sortedAZ")) {
                sortAZ(sortProp);
                target.classList.remove("sortedZA");
                target.classList.add("sortedAZ");
                span.classList.remove("glyphicon-sort");
                span.classList.add("glyphicon-sort-by-alphabet");
                 span.classList.remove("glyphicon-sort-by-alphabet-alt");
            } else {
                target.classList.remove("sortedAZ");
                span.classList.add("glyphicon-sort-by-alphabet");
                sortZA(sortProp);
                target.classList.add("sortedZA");
                span.classList.remove("glyphicon-sort-by-alphabet");
                span.classList.add("glyphicon-sort-by-alphabet-alt");
            }
            clearSortedGlyphicons(sortedColumn);
            deleteRows();
            addRows(studentsMap)
        }
    }

    function clearSortedGlyphicons(sortedColumn) {
        let cells = document.getElementsByTagName("th");
        for (let i = 0; i < cells.length - 1; i++) {
            if (i !== sortedColumn) {
                cells[i].classList.remove("sortedZA","sortedAZ");
                if(cells[i].lastChild.classList.contains("glyphicon-sort-by-alphabet")) {
                    cells[i].lastChild.classList.remove("glyphicon-sort-by-alphabet");
                }
                if(cells[i].lastChild.classList.contains("glyphicon-sort-by-alphabet-alt")) {
                    cells[i].lastChild.classList.remove("glyphicon-sort-by-alphabet-alt");
                }
                if(!cells[i].lastChild.classList.contains("glyphicon-sort")) {
                    cells[i].lastChild.classList.toggle("glyphicon-sort");
                }
            }
        }
    }

    function sortAZ(sortProp) {
        studentsMap.sort((a,b) => {
            if(a[sortProp] < b[sortProp]) {
                return -1;
            }
            if(a[sortProp] > b[sortProp]) {
                return 1;
            }
            return 0;
        });
    }
    function sortZA(sortProp) {
        studentsMap.reverse();
    }
    function validate(event) {
        event.preventDefault();
        save();
        event.target.reset();
    }
    document.getElementsByTagName("tbody")[0].addEventListener("click", action);
    document.getElementById("editForm").addEventListener("submit", validate);
    document.getElementsByTagName("thead")[0].addEventListener("click", sort);
    document.getElementsByTagName("thead")[0].addEventListener("click", event=>console.log(event));
})();