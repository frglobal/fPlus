function getQueryFile(fileName) {

    return "SQL(\"frplus_dev\",\"SELECT default_query FROM app_list WHERE file_name =\'" + fileName + "\'\",1,1)"

};