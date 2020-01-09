
console.log("test");
// Define UI elements
let ui = {
    timer: document.getElementById('timer'),
    robotState: document.getElementsByTagName("body")[0],
    gyro: {
        container: document.getElementById('gyro'),
        val: 0,
        offset: 0,
        visualVal: 0,
        arm: document.getElementById('gyro-arm'),
        number: document.getElementById('gyro-number')
    },
    battery: document.getElementById('battery'),
    intake: document.getElementById('intake'),
    elevatorHeight: document.getElementById('elevatorHeight'),
    vision: document.getElementById('vision'),
    leftDist: document.getElementById('leftDist'),
    rightDist: document.getElementById('rightDist'),
    autoSelect: document.getElementById('auto-select')
};

// Key Listeners


// Gyro rotation
let updateGyro = (key, value) => {
    ui.gyro.val = value;
    ui.gyro.visualVal = Math.floor(ui.gyro.val - ui.gyro.offset);
    ui.gyro.visualVal %= 360;
    if (ui.gyro.visualVal < 0) {
        ui.gyro.visualVal += 360;
    }
    ui.gyro.arm.style.transform = `rotate(${ui.gyro.visualVal}deg)`;
    ui.gyro.number.innerHTML = ui.gyro.visualVal + 'º';
};
NetworkTables.addKeyListener('/FangsDashboard/Gyro-Y', updateGyro);

// Battery
let updateBattery = (key, value) => {
  if (value >= 11) {
ui.battery.innerHTML = "<div class='sectitle'>Battery</div><center><div class='paneltext green'>"+Math.round(value*100)/100+" V</div></center></div>"
} else {
    ui.battery.innerHTML = "<div class='sectitle'>Battery</div><center><div class='paneltext red'>"+Math.round(value*100)/100+" V</div></center></div>"
}
};
NetworkTables.addKeyListener('/FangsDashboard/battery', updateBattery);

// Elevator Height
let updateElevatorHeight = (key, value) => {
ui.elevatorHeight.innerHTML = "<div class='sectitle'>Elevator</div><center><div class='paneltext'>"+value+"</div></center></div>"
};
NetworkTables.addKeyListener('/FangsDashboard/elevatorHeight', updateElevatorHeight);


  NetworkTables.addKeyListener('/FangsDashboard/time', (key, value) => {
      ui.timer.innerHTML = value;
  });

// Intake
let updateIntake = (key, value) => {
    if (value == "up") {
  ui.intake.innerHTML = "<div class='sectitle'>Intake</div><center><div class='paneltext'>UP</div></center></div>"
  } else {
      ui.intake.innerHTML = "<div class='sectitle'>Intake</div><center><div class='paneltext'>DOWN</div></center></div>"
  }
  };
  NetworkTables.addKeyListener('/FangsDashboard/intake', updateIntake);

  // Vision
let updateVision = (key, value) => {
  if (value == -99999.0) {
    ui.vision.innerHTML = "<div class='sectitle'>Vision</div><center><div class='paneltext'>N/A</div></center></div>"
  } else if (value <= -.2) {
    ui.vision.innerHTML = "<div class='sectitle'>Vision</div><center><div class='paneltext red'>"+Math.round(value*100)/100+"<br><-----</div></center></div>"
  } else if (value >= .2) {
    ui.vision.innerHTML = "<div class='sectitle'>Vision</div><center><div class='paneltext red'>"+Math.round(value*100)/100+"<br>-----></div></center></div>"
} else {
  ui.vision.innerHTML = "<div class='sectitle'>Vision</div><center><div class='paneltext green'>"+Math.round(value*100)/100+"<br>Centered</div></center></div>"
}
};
NetworkTables.addKeyListener('/FangsDashboard/vision', updateVision);
 

// Load list of prewritten autonomous modes
NetworkTables.addKeyListener('/FangsDashboard/AutoList', (key, value) => {
    // Clear previous list
    console.log(key.toString());
    console.log(value.toString());
    while (ui.autoSelect.firstChild) {
        ui.autoSelect.removeChild(ui.autoSelect.firstChild);
    }
    // Make an option for each autonomous mode and put it in the selector
    for (let i = 0; i < value.length; i++) {
        var option = document.createElement('option');
        option.appendChild(document.createTextNode(value[i]));
        //option.innerHTML = '<option value="'+i+'">'+value[i]+'</option>';
        option.setAttribute('value', i);
        ui.autoSelect.appendChild(option);
    }
    // Set value to the already-selected mode. If there is none, nothing will happen.
    //ui.autoSelect.value = NetworkTables.getValue('/SmartDashboard/currentlySelectedMode');
});

// Load list of prewritten autonomous modes
NetworkTables.addKeyListener('/FangsDashboard/autoSelected', (key, value) => {
    ui.autoSelect.value = value;
});

ui.autoSelect.onchange = function() {
    NetworkTables.putValue('/FangsDashboard/autoSelected', this.value);
};

// Reset gyro value to 0 on click
ui.gyro.container.onclick = function() {
    // Store previous gyro val, will now be subtracted from val for callibration
    ui.gyro.offset = ui.gyro.val;
    // Trigger the gyro to recalculate value.
    updateGyro('/FangsDashboard/Gyro-Y', ui.gyro.val);
};

/*ui.safeSwitch.onclick = function() {
    console.log("checked");
    if (ui.safeSwitch.checked) {
    ui.safeLabel.innerHTML = "On";
    } else {
        ui.safeLabel.innerHTML = "Off";
    }
}*/
// Update NetworkTables when autonomous selector is changed
// Get value of arm height slider when it's adjusted
ui.armPosition.oninput = function() {
    NetworkTables.putValue('/SmartDashboard/arm/encoder', parseInt(this.value));
};

function launchpadBtn(buttonId) {
  
}

function ChangeSwitch(ckbx, label, path)
{
   if( ckbx.checked )
   {
      document.getElementById(label).innerHTML = "ON";
      NetworkTables.putValue('/SmartDashboard/'+path, true);
   }
   else
   {
    document.getElementById(label).innerHTML = "OFF";
    NetworkTables.putValue('/SmartDashboard/'+path, false);
   }
}
NetworkTables.addKeyListener('/SmartDashboard/switchOne', (key, value) => {
  if (value == true) {
    document.getElementById("labelOne").innerHTML = "ON";
    document.getElementById("switchOne").checked = true;
  } else {
    document.getElementById("labelOne").innerHTML = "OFF";
    document.getElementById("switchOne").checked = false;
  }
});

NetworkTables.addKeyListener('/SmartDashboard/switchTwo', (key, value) => {
  if (value == true) {
    document.getElementById("labelTwo").innerHTML = "ON";
    document.getElementById("switchTwo").checked = true;
  } else {
    document.getElementById("labelTwo").innerHTML = "OFF";
    document.getElementById("switchTwo").checked = false;
  }
});

NetworkTables.addKeyListener('/SmartDashboard/switchThree', (key, value) => {
  if (value == true) {
    document.getElementById("labelThree").innerHTML = "ON";
    document.getElementById("switchThree").checked = true;
  } else {
    document.getElementById("labelThree").innerHTML = "OFF";
    document.getElementById("switchThree").checked = false;
  }
});

NetworkTables.addKeyListener('/SmartDashboard/switchFour', (key, value) => {
  if (value == true) {
    document.getElementById("labelFour").innerHTML = "ON";
    document.getElementById("switchFour").checked = true;
  } else {
    document.getElementById("labelFour").innerHTML = "OFF";
    document.getElementById("switchFour").checked = false;
  }
});

addEventListener('error',(ev)=>{
    ipc.send('windowError',{mesg:ev.message,file:ev.filename,lineNumber:ev.lineno})
});
