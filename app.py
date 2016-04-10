from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'F12Zr47j\3yX R~X@H!jmM]Lwf/,?KT'

def isLogin():
	return False

@app.route('/')
def Home():
	return render_template('index.html',islogin=isLogin(), login="Student")

@app.route('/login/master')
def MasterLogin():
	if islogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Master")

@app.route('/login/student')
def StudentLogin():
	if islogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Student")

@app.route('/login/teacher')
def TeacherLogin():
	if islogin() :
		pass
	else:
		return render_template('index.html',islogin=False, login="Teacher")

@app.route('/logout')
def Logout():
	pass

@app.route('/contactus')
def Contactus():
	pass

@app.route('/master')
def Master():
	pass

@app.route('/students')
def Students():
	pass

@app.route('/teachers')
def Teachers():
	pass

@app.route('/add/students')
def AddStudents():
	pass

@app.route('/add/teachers')
def AddTeachers():
	pass

@app.route('/moodle')
@app.route('/moodle/home')
def Moodle():
	pass

@app.route('/moodle/<folder_name>')
def Folder():
	pass

@app.route('/moodle/upload')
def Upload():
	pass

if __name__ == '__main__':
	app.run(debug=True)