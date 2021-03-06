/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Servomotor blocks for Blockly.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/*
 * Make the DIV element draggable
 */
dragElement(document.getElementById("keyboard_nav"));
dragElement(document.getElementById("helpModal"));

function dragElement(elmnt) {
    var pos1 = 0,
            pos2 = 0,
            pos3 = 0,
            pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
;

/*
 * Javascript function for collapsible content in modal
 */
function collapsibleContentInit() {
    var coll = document.getElementsByClassName("collapsibleButton");
    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                document.getElementById("board_mini_picture_div").style.transform = "scale(1)";
                document.getElementById("board_mini_picture_div").style.top = "";
                document.getElementById("collapsibleContent").style.visibility = "hidden";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                document.getElementById("board_mini_picture_div").style.transform = "scale(1.7)";
                document.getElementById("board_mini_picture_div").style.top = "150px";
                document.getElementById("collapsibleContent").style.visibility = "visible";
            }
        });
    }
}

function toggleEditorReadOnly(item){
    if(item.checked) {
        editor.setOptions({
            readOnly: false
        })
    } else {
        editor.setOptions({
            readOnly: true
        })
    }
}
/*
 * Icons button mouser over
 */
document.getElementById('fullScreenButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['fullScreenButton_span'];
};
document.getElementById('fullScreenButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('undoButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['undoButton_span'];
};
document.getElementById('undoButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('redoButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['redoButton_span'];
};
document.getElementById('redoButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('boardButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['boardButtonSpan'];
};
document.getElementById('boardButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('boardMenu').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['boardButtonSpan'];
};
document.getElementById('boardMenu').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('verifyButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['verifyButton_span'];
};
document.getElementById('verifyButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialButtonSpan'];
};
document.getElementById('serialButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialMenu').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialSpan'];
};
document.getElementById('serialMenu').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('uploadButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['uploadButton_span'];
};
document.getElementById('uploadButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('serialConnectButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['serialConnectButton_span'];
};
document.getElementById('serialConnectButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('saveCodeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['saveCodeButton_span'];
};
document.getElementById('saveCodeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('newButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['newButton_span'];
};
document.getElementById('newButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('saveXMLButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['saveXMLButton_span'];
};
document.getElementById('saveXMLButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('loadXMLfakeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['loadXMLfakeButton_span'];
};
document.getElementById('loadXMLfakeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('resetButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['resetButton_span'];
};
document.getElementById('resetButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('lateral-panel-setup-label').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['setup_sideButton_span'];
};
document.getElementById('lateral-panel-setup-label').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('helpButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['helpButton_span'];
};
document.getElementById('helpButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('copyCodeButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['copyCodeButton_span'];
};
document.getElementById('copyCodeButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('lateral-panel-CLI-label').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['config_sideButton_span'];
};
document.getElementById('lateral-panel-CLI-label').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('coreUpdateButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['coreUpdateButton_span'];
};
document.getElementById('coreUpdateButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('cleanCLIcacheButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['cleanCLIcacheButton_span'];
};
document.getElementById('cleanCLIcacheButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('listBoardsButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['listBoardsButton_span'];
};
document.getElementById('listBoardsButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installBoardsInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installBoardsInput_span'];
};
document.getElementById('installBoardsInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installBoardsButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installBoardsButton_span'];
};
document.getElementById('installBoardsButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('searchlLibInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['searchlLibInput_span'];
};
document.getElementById('searchlLibInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('searchlLibButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['searchlLibButton_span'];
};
document.getElementById('searchlLibButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installLibInput').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installLibInput_span'];
};
document.getElementById('installLibInput').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('installLibButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['installLibButton_span'];
};
document.getElementById('installLibButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('lateral-panel-CLI-label').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['config_sideButton_span'];
};
document.getElementById('lateral-panel-CLI-label').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('CLI_githubLinkButton').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['CLI_githubLinkButton_span'];
};
document.getElementById('CLI_githubLinkButton').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};
document.getElementById('editorReadOnlyToggle').onmouseover = function () {
    document.getElementById("content_hoverButton").textContent = MSG['editorReadOnlyToggle_span'];
};
document.getElementById('editorReadOnlyToggle').onmouseout = function () {
    document.getElementById("content_hoverButton").textContent = "";
};