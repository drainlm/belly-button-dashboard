const url="https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Initialize page with D3
function init() {
    d3.json(url).then((data) => {
    console.log(data);

    let names = data.names
    console.log(names);

    // Use D3 to select the drop down menu
    let dropdownMenu = d3.select("#selDataset");
    names.forEach((X)=>{
     dropdownMenu.append("option").text(X)
    });

    // Create Horizontal Bar Chart

    // Initialize arrays
    let id = names[0];
    let sample = data.samples.filter((d) => d.id === id)[0];
    let otu_ids = [];
    let sample_values = [];
    let otu_labels = [];

    // For loop to populate arrays
    for (let i = 0; i < 10 && i < sample.otu_ids.length; i++) {
      otu_ids.push(`OTU ${sample.otu_ids[i]}`);
      sample_values.push(sample.sample_values[i]);
      otu_labels.push(sample.otu_labels[i]);
    }

        // Reverse the arrays 
        otu_ids.reverse();
        sample_values.reverse();
        otu_labels.reverse()

    // traceData for Top 10 OTU chart
    let barData = [{
        x: sample_values,
        y: otu_ids,
        text: otu_labels, 
        type: 'bar',
        orientation: 'h',
    }];

    // Apply layout
    let barLayout = {
        height: 450,
        width: 300
    };

    // Render the plot to the div tag with id "bar"
    Plotly.newPlot("bar", barData, barLayout);


    });
}

  init();