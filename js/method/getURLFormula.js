function getURLFormula(fileName) {

return "SQL(\"frPlusR\",\"SELECT CONCAT(file_path,\'&\',default_op) AS rpath FROM app_list WHERE file_name =\'" + fileName + "\'\",1,1)"

};