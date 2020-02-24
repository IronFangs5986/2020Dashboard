
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
    shooterrpm: document.getElementById('shooterrpm'),
    target: document.getElementById('target'),
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

// Target
let updateTarget = (key, value) => {
  if (value == true) {
    ui.target.innerHTML = "<div class='sectitle'>Target</div><center><div class='paneltext green'>READY</div></center></div>"
  } else {
    ui.target.innerHTML = "<div class='sectitle'>Target</div><center><div class='paneltext red'>NO</div></center></div>"
  }
};
NetworkTables.addKeyListener('/ChickenVision/tapeDetected', updateTarget);


  NetworkTables.addKeyListener('/FangsDashboard/time', (key, value) => {
      ui.timer.innerHTML = value;
  });

// shooterRPM
let updateShooterRPM = (key, value) => {
  ui.shooterrpm.innerHTML = "<div class='sectitle'>Shooter</div><center><div class='paneltext'>"+Math.trunc(value)+" rpm</div></center></div>"
  };
  NetworkTables.addKeyListener('/FangsDashboard/shooterRPM', updateShooterRPM);

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

function launchpadBtn(buttonId, value) {
  if (buttonId == 1) {
    NetworkTables.putValue('/FangsLaunchpad/redButton', value);
  } else if (buttonId == 2) {
    NetworkTables.putValue('/FangsLaunchpad/greenButton', value);
  } else if (buttonId == 3) {
    NetworkTables.putValue('/FangsLaunchpad/blueButton', value);
  } else if (buttonId == 4) {
    NetworkTables.putValue('/FangsLaunchpad/yellowButton', value);
  } else if (buttonId == 5) {
    NetworkTables.putValue('/FangsLaunchpad/spinButton', value);
  } else if (buttonId == 6) {
    NetworkTables.putValue('/FangsLaunchpad/climbButton1', value);
  } else if (buttonId == 7) {
    NetworkTables.putValue('/FangsLaunchpad/climbButton2', value);
  } else if (buttonId == 8) {
    NetworkTables.putValue('/FangsLaunchpad/spinnerUpButton', value);
  } else if (buttonId == 9) {
    NetworkTables.putValue('/FangsLaunchpad/spinnerDownButton', value);
  } else if (buttonId == 10) {
    NetworkTables.putValue('/FangsLaunchpad/autoColorButton', value);
  } else if (buttonId == 11) {
    NetworkTables.putValue('/FangsLaunchpad/adjustCWButton', value);
  } else if (buttonId == 12) {
    NetworkTables.putValue('/FangsLaunchpad/adjustCCWButton', value);
  } else if (buttonId == 14) {
    NetworkTables.putValue('/FangsLaunchpad/climbAdjustLeftButton', value);
  } else if (buttonId == 15) {
    NetworkTables.putValue('/FangsLaunchpad/climbAdjustRightButton', value);
  } else if (buttonId == 16) {
    if (value == 1) { //tracking
      NetworkTables.putValue('/ChickenVision/Tape', true);
      NetworkTables.putValue('/ChickenVision/Driver', false);
    } else { //driver
      NetworkTables.putValue('/ChickenVision/Tape', false);
      NetworkTables.putValue('/ChickenVision/Driver', true);
    }
  } else if (buttonId == 17) {
    NetworkTables.putValue('/FangsLaunchpad/autoShootButton', value);
  } else if (buttonId == 18) {
    NetworkTables.putValue('/FangsLaunchpad/semiAutoShootButton', value);
  } else if (buttonId == 19) {
    NetworkTables.putValue('/FangsLaunchpad/semiAutoRevButton', value);
  } else if (buttonId == 20) {
    NetworkTables.putValue('/FangsLaunchpad/intakeOutButton', value);
  } else if (buttonId == 21) {
    NetworkTables.putValue('/FangsLaunchpad/intakeInButton', value);
  } else if (buttonId == 22) {
    NetworkTables.putValue('/FangsLaunchpad/indexerOutButton', value);
  } else if (buttonId == 23) {
    NetworkTables.putValue('/FangsLaunchpad/indexerInButton', value);
  } else if (buttonId == 24) {
    NetworkTables.putValue('/FangsLaunchpad/transportOutButton', value);
  } else if (buttonId == 25) {
    NetworkTables.putValue('/FangsLaunchpad/transportInButton', value);
  } else if (buttonId == 26) {
    NetworkTables.putValue('/FangsLaunchpad/controlOutButton', value);
  } else if (buttonId == 27) {
    NetworkTables.putValue('/FangsLaunchpad/controlInButton', value);
  } else if (buttonId == 28) {
    NetworkTables.putValue('/FangsLaunchpad/manualShootButton', value);
  } else if (buttonId == 29) {
    NetworkTables.putValue('/FangsLaunchpad/robotSpinLeftButton', value);
  } else if (buttonId == 30) {
    NetworkTables.putValue('/FangsLaunchpad/robotSpinRightButton', value);
  } else if (buttonId == 31) {
    NetworkTables.putValue('/FangsLaunchpad/autoIntakeButton', value);
  }
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
