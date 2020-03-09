
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
    revSpeed : document.getElementById('revSpeed'),
    target: document.getElementById('target'),
    distance: document.getElementById('distance'),
    calcrpm: document.getElementById('calcrpm'),
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
    if (Math.abs(NetworkTables.getValue('/FangsDashboard/calcRPM') - value) <= 20) {
      ui.shooterrpm.innerHTML = "<div class='sectitle'>Shooter</div><center><div class='paneltext green'>"+Math.trunc(value)+" rpm</div></center></div>"
    } else {
      ui.shooterrpm.innerHTML = "<div class='sectitle'>Shooter</div><center><div class='paneltext red'>"+Math.trunc(value)+" rpm</div></center></div>"
    }
  };
  NetworkTables.addKeyListener('/FangsDashboard/shooterRPM', updateShooterRPM);

// Rev Speed
let updateShooterPercent = (key, value) => {
  ui.revSpeed.innerHTML = "<div class='sectitle'>Rev</div><center><div class='paneltext'>"+Math.round(value*100)+"%</div></center></div>"
  };
  NetworkTables.addKeyListener('/FangsDashboard/revSpeed', updateShooterPercent);

  // Distance
let updateDistance = (key, value) => {
  ui.distance.innerHTML = "<div class='sectitle'>Distance</div><center><div class='paneltext'>"+Math.round(value)+"in</div></center></div>"
};
NetworkTables.addKeyListener('/FangsDashboard/targetDistance', updateDistance);

// Calc RPM
let updateCalcRPM = (key, value) => {
  ui.calcrpm.innerHTML = "<div class='sectitle'>Shoot</div><center><div class='paneltext'>"+Math.trunc(value)+" rpm</div></center></div>"
};
NetworkTables.addKeyListener('/FangsDashboard/calcRPM', updateCalcRPM);


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

NetworkTables.addKeyListener('/FangsDashboard/firstBall', (key, value) => {
  if (value == true) {
    document.getElementById("firstBall").innerHTML = "<span class='dot hasBall'>1</span>";
  } else {
    document.getElementById("firstBall").innerHTML = "<span class='dot'>1</span>";
  }
});

NetworkTables.addKeyListener('/FangsDashboard/secondBall', (key, value) => {
  if (value == true) {
    document.getElementById("secondBall").innerHTML = "<span class='dot hasBall'>2</span>";
  } else {
    document.getElementById("secondBall").innerHTML = "<span class='dot'>2</span>";
  }
});

NetworkTables.addKeyListener('/FangsDashboard/thirdBall', (key, value) => {
  if (value == true) {
    document.getElementById("thirdBall").innerHTML = "<span class='dot hasBall'>3</span>";
  } else {
    document.getElementById("thirdBall").innerHTML = "<span class='dot'>3</span>";
  }
});

NetworkTables.addKeyListener('/FangsDashboard/fourthBall', (key, value) => {
  if (value == true) {
    document.getElementById("fourthBall").innerHTML = "<span class='dot hasBall'>4</span>";
  } else {
    document.getElementById("fourthBall").innerHTML = "<span class='dot'>4</span>";
  }
});

NetworkTables.addKeyListener('/FangsDashboard/fifthBall', (key, value) => {
  if (value == true) {
    document.getElementById("fifthBall").innerHTML = "<span class='dot hasBall'>5</span>";
    console.log("fifth on");
  } else {
    document.getElementById("fifthBall").innerHTML = "<span class='dot'>5</span>";
  }
});

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

function zeroLaunchpad() {
  let value = 0;
  NetworkTables.putValue('/FangsLaunchpad/redButton', value);
  NetworkTables.putValue('/FangsLaunchpad/greenButton', value);
  NetworkTables.putValue('/FangsLaunchpad/blueButton', value);
  NetworkTables.putValue('/FangsLaunchpad/yellowButton', value);
  NetworkTables.putValue('/FangsLaunchpad/spinButton', value);
  NetworkTables.putValue('/FangsLaunchpad/climbButton1', value);
  NetworkTables.putValue('/FangsLaunchpad/climbButton2', value);
  NetworkTables.putValue('/FangsLaunchpad/spinnerUpButton', value);
  NetworkTables.putValue('/FangsLaunchpad/spinnerDownButton', value);
  NetworkTables.putValue('/FangsLaunchpad/autoColorButton', value);
  NetworkTables.putValue('/FangsLaunchpad/adjustCWButton', value);
  NetworkTables.putValue('/FangsLaunchpad/adjustCCWButton', value);
  NetworkTables.putValue('/FangsLaunchpad/climbAdjustLeftButton', value);
  NetworkTables.putValue('/FangsLaunchpad/climbAdjustRightButton', value);
  NetworkTables.putValue('/FangsLaunchpad/autoShootButton', value);
  NetworkTables.putValue('/FangsLaunchpad/semiAutoShootButton', value);
  NetworkTables.putValue('/FangsLaunchpad/semiAutoRevButton', value);
  NetworkTables.putValue('/FangsLaunchpad/intakeOutButton', value);
  NetworkTables.putValue('/FangsLaunchpad/intakeInButton', value);
  NetworkTables.putValue('/FangsLaunchpad/indexerOutButton', value);
  NetworkTables.putValue('/FangsLaunchpad/indexerInButton', value);
  NetworkTables.putValue('/FangsLaunchpad/transportOutButton', value);
  NetworkTables.putValue('/FangsLaunchpad/transportInButton', value);
  NetworkTables.putValue('/FangsLaunchpad/controlOutButton', value);
  NetworkTables.putValue('/FangsLaunchpad/controlInButton', value);
  NetworkTables.putValue('/FangsLaunchpad/manualShootButton', value);
  NetworkTables.putValue('/FangsLaunchpad/robotSpinLeftButton', value);
  NetworkTables.putValue('/FangsLaunchpad/robotSpinRightButton', value);
  NetworkTables.putValue('/FangsLaunchpad/autoIntakeButton', value);
  NetworkTables.putValue('/FangsLaunchpad/revDownButton', value);
  NetworkTables.putValue('/FangsLaunchpad/revUpButton', value);
}

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
      NetworkTables.putValue('/limelight/camMode', 0.0);
    } else { //driver
      NetworkTables.putValue('/limelight/camMode', 1.0);
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
  } else if (buttonId == 32) {
  if (value == 1) {
   NetworkTables.putValue('/FangsLaunchpad/revDownButton', value);
   let revValue = NetworkTables.getValue('/FangsDashboard/revSpeed');
   NetworkTables.putValue('/FangsDashboard/revSpeed', revValue - 0.01);
 }
  } else if (buttonId == 33) {
    if (value == 1) {
   NetworkTables.putValue('/FangsLaunchpad/revUpButton', value);
   let revValue = NetworkTables.getValue('/FangsDashboard/revSpeed');
   NetworkTables.putValue('/FangsDashboard/revSpeed', revValue + 0.01);
  }
  } else if (buttonId == 34) {
    NetworkTables.putValue('/FangsLaunchpad/policeLights', value);
  } else if (buttonId == 35) {
    NetworkTables.putValue('/FangsLaunchpad/autoAlign', value);
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
