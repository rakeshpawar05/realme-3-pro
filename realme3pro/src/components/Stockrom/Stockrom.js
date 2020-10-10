import React from 'react';

const Stockrom = () => {
    return (
        <div class="" id="">

            <b>Prerequisite</b><br />
            1. Unlocked Bootloader<br />
            2. <a href="https://forum.xda-developers.com/realme-3-pro/development/recovery-orangefox-recovery-project-t3943068" >OrangeFox Recovery</a> or <a href="https://forum.xda-developers.com/realme-3-pro/development/recovery-unofficial-twrp-realme-3-pro-t3958697" >TWRP Recovery</a><br />
            3. <a href="https://dl.google.com/android/repository/platform-tools-latest-windows.zip" >Latest adb &amp; fastboot files</a><br />
            4. <a href="https://sourceforge.net/projects/rmx1851/files/custom_recovery_StockROM_flashable_files/"  >Stock ROM ZIP files</a><br />
            5. <a href="https://sourceforge.net/projects/rmx1851/files/fastboot_files/recovery.img/download"  >Stock Recovery [OPTIONAL]</a><br />
            <br />
            <b>Custom Recovery Method:</b><br />
            1. Enable USB-Debugging: <b><i>adb reboot recovery</i></b> or hold the volume up while rebooting or hold the volume down to enter bootloader &amp; choose Reboot to Recovery by volume buttons, power key to enter.<br />
            2. Copy the Stock ROM zip to your device via <b><i>adb push RMX1851_flashable_*.zip /sdcard</i></b> or <b>MTP</b><br />
            3. Wipe data, cache &amp; dalvik (format data if stuck at boot animation)<br />
            4. Locate the zip file &amp; Install <br />
            5. Flashing all the partitions with stock files takes time. Hold for a while.<br />
            6. After successful install of the zip. Your device will have Stock Recovery with Stock ROM. Finally Reboot.<br />
            <br />
            <b>Fastboot Method:</b><br />
            Note: <b>Following process formats internal storage, so backup the internal storage files. If your device is in Stock ROM &amp; somehow system partition is messed up just flash only system.</b> <br />
            1. Download required <a href="https://sourceforge.net/projects/rmx1851/files/fastboot_files/"  >Fastboot files</a><br />
            2. If downloaded 7z files, extract system.img file. <br />
            3. Enter <div style={{margin: "20px"}, {marginTop: "5px"}}>
            <div class="" style={{marginBottom: "2px"}}>Code: </div>
            <pre class=" "  style={
                   { margin: "0px"},
                    {padding: "5px"},
                    {border: "1px inset"},
                    {width: "100%"},
                    {height: "34px"},
                    {textAlign: "left"},
                    {overflow: "auto"}}>fastboot -w &amp;&amp; fastboot erase system &amp;&amp; fastboot flash recovery recovery.img &amp;&amp; fastboot flash boot boot.img &amp;&amp; fastboot flash vbmeta vbmeta.img &amp;&amp; fastboot flash dtbo dtbo.img &amp;&amp; fastboot flash system system.img &amp;&amp; fastboot reboot</pre>
            </div>4. It takes a while to flash System partition, have patience.<br />
            5. Device reboots to system if everything is flashed successfully.<br />
            <br />
            <b>Stock Recovery Method:</b><br />
            1. Download <a href="https://sourceforge.net/projects/rmx1851/files/stock_recovery_StockROM_files/"  >Stock ROM OZIP Files</a> &amp; <a href="https://sourceforge.net/projects/rmx1851/files/fastboot_files/recovery.img/download">Stock Recovery</a><br />
            2. Copy *.ozip to sdcard or internal storage.<br />
            2. Goto fastboot &amp; enter <b><i>fastboot flash recovery recovery.img</i></b><br />
            3. Reboot to recovery, wipe (1st option). Then go back to main menu <b>Install from storage</b> locate the *.ozip file &amp; install.
        </div>
    )
}

export default Stockrom;