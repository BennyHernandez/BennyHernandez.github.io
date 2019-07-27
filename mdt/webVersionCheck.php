<!DOCTYPE html>
<html>
    <head>
    </head>
    <body>
        <?php
        $latestVersion = "2.0";
        $changeLog = "";
        $downloadURL = "https://github.com/BennyFaelz/FiveM-MDT";
        $extraInfo = "";
        
        if (isset($_GET["version"])) {
            if ($_GET["version"] == $latestVersion) {
                $isUpdated = true;
                $changeLog = "Up to date!";
            } else {
                $isUpdated = false;
            }
            
            
                $data = array("latestVersion"=>$latestVersion, "changes"=>$changeLog, "isUpdated"=>$isUpdated, "downloadURL"=>$downloadURL, "extraInfo"=>$extraInfo);
                echo json_encode($data);
        } else {
            echo "Error: no version specified.";
        }
        ?>
    </body>
</html>
