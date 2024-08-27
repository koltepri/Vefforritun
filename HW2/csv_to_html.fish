set input_file "gogn/spil.csv"

echo "<tbody>">"spil.html"
tail -n +2 $input_file | while read -l INPUT
    set INPUT (string replace ',' '</td><td>' -- $INPUT)
    echo "<tr><td>$INPUT</td></tr>">>"spil.html"
end
echo "</tbody>">>"spil.html"
