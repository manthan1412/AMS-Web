from flask import Flask, render_template, request, redirect, url_for, flash, session

app = Flask(__name__)
app.secret_key = 'F12Zr47j\3yX R~X@H!jmM]Lwf/,?KT'
url = "https://ams1412.herokuapp.com"
url = "http://localhost:8080"

def isLogin():
	try:	
		# if 'username' in session:
		# 	if 'password' in session:
		# 		payload = ""
		# 		response = requests.request("GET", url + "/login/" +session["role"].lower(), auth=(session["username"], session["password"]), data=payload, timeout=(5,10))
		# 		data = response.json()
		# 		print data
		# 		if data['message'] == "Successfully logged in":
		# 			return session['role']
		if 'role' in session:
	 		return session['role']
		return None
	except:	
		return None

# @app.errorhandler(InvalidAPIUsage)
# def handle_invalid_usage(error):
#     response = jsonify(error.to_dict())
#     response.status_code = error.status_code
#     return response

@app.route("/setcookie")
def SetCookie():
	session["username"] = request.cookies.get('username')
	session["password"] = request.cookies.get('password')
	session["role"] = request.cookies.get('role')
	session["id"] = request.cookies.get('id')
	if session["role"] == "master":
		return redirect(url_for('Master'))
	else:
		return redirect(url_for('Moodle'))

@app.route('/cookie')
def Co():
	username = request.cookies.get('username')
	return username

@app.route('/')
def Home():
	l = isLogin()
	if l is None:
		return render_template('index.html',islogin=False, login="Student")
	elif l == "master":
		return redirect(url_for('Master'))
	else:
		return redirect(url_for('Moodle'))


@app.route('/master')
def Master():
	try:
		if session["role"] == "master":
			return render_template('dashboard.html')
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/login')
@app.route('/login/student')
def MasterLogin():
	if isLogin() :
		return redirect(url_for('Moodle'))
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
	session.pop('username', None)
	session.pop('password', None)
	session.pop('role', None)
	session.pop('id', None)
	return render_template('logout.html');

@app.route('/contactus')
def Contactus():
	return render_template('index2.html')

@app.route('/masters')
def Masters():
	pass

@app.route('/students')
def Students():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', students=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))


@app.route('/teachers')
def Teachers():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', teachers=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/classes')
def Classes():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', classes=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/subjects')
def Subjects():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', subjects=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/timetables')
def Timetables():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', timetables=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/profile')
def Profile():
	return render_template('profie.html')

@app.route('/add/master')
def AddMasters():
	pass

@app.route('/add/students')
def AddStudents():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', students=True, add=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/add/teachers')
def AddTeachers():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html',teachers=True, add=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/add/classes')
def AddClasses():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', classes=True, add=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/add/subjects')
def AddSubjects():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', subjects=True, add=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/add/timetable')
def AddTimetable():
	try:
		if session['role'] == 'master':
			return render_template('dashboard.html', timetables=True, add=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/edit/masters')
def EditMasters():
	try:
		if session['role'] == "master":
			return render_template('dashboard.html',masters=True, edit=True)
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/edit/students')
def EditStudents():
	try:
		if session['role'] == "master":
			return render_template('dashboard.html',students=True, edit=True)
		elif session['role'] == "student":
			return render_template('home.html')
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

@app.route('/edit/teachers')
def EditTeachers():
	try:
		if session['role'] == "master":
			return render_template('dashboard.html',teachers=True, edit=True)
		elif session['role'] == "teacher":
			return render_template('home.html')
		else:
			return redirect(url_for('Home'))
	except:
		return redirect(url_for('Home'))

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
	if 'role' in session:
		return render_template('moodle.html')
	else:
		return redirect(url_for('Home'))

@app.route('/moodle/upload')
def Upload():
	pass

@app.route('/moodle/<folder_name>')
def Folder():
	pass


if __name__ == '__main__':
	app.run(debug=True)