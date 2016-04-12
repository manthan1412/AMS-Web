from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'F12Zr47j\3yX R~X@H!jmM]Lwf/,?KT'

def isLogin():
	return False

# @app.errorhandler(InvalidAPIUsage)
# def handle_invalid_usage(error):
#     response = jsonify(error.to_dict())
#     response.status_code = error.status_code
#     return response

@app.route('/')
def Home():
	return render_template('index.html',islogin=isLogin(), login="Student")

@app.route('/login')
@app.route('/login/student')
def MasterLogin():
	if isLogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Student")

@app.route('/login/master')
def StudentLogin():
	if isLogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Master")

@app.route('/login/teacher')
def TeacherLogin():
	if isLogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Teacher")

@app.route('/logout')
def Logout():
	pass

@app.route('/contactus')
def Contactus():
	pass

@app.route('/masters')
def Masters():
	pass

@app.route('/students')
def Students():
	pass

@app.route('/teachers')
def Teachers():
	pass

@app.route('/add/master')
def AddMasters():
	pass

@app.route('/add/students')
def AddStudents():
	pass

@app.route('/add/teachers')
def AddTeachers():
	pass

@app.route('/add/classes')
def AddClasses():
	pass

@app.route('/add/subjects')
def AddSubjects():
	pass

@app.route('/add/timetable')
def AddTimetable():
	pass

@app.route('/edit/masters')
def EditMasters():
	pass

@app.route('/edit/students')
def EditStudents():
	pass

@app.route('/edit/teachers')
def EditTeachers():
	pass

@app.route('/edit/classes')
def EditClasses():
	pass

@app.route('/edit/subjects')
def EditSubjects():
	pass

@app.route('/edit/timetable')
def EditTimetable():
	pass

@app.route('/delete/masters')
def DeleteMasters():
	pass

@app.route('/delete/students')
def DeleteStudents():
	pass

@app.route('/delete/teachers')
def DeleteTeachers():
	pass

@app.route('/delete/classes')
def DeleteClasses():
	pass

@app.route('/delete/subjects')
def DeleteSubjects():
	pass

@app.route('/delete/timetable')
def DeleteTimetable():
	pass

@app.route('/moodle')
@app.route('/moodle/home')
def Moodle():
	pass

@app.route('/moodle/upload')
def Upload():
	pass

@app.route('/moodle/<folder_name>')
def Folder():
	pass


if __name__ == '__main__':
	app.run(debug=True)