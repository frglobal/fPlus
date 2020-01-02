function getQueryFile(fileName) {

    return "SQL(\"frPlusR\",\"SELECT default_query FROM app_list WHERE file_name =\'" + fileName + "\'\",1,1)"

};