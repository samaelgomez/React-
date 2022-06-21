import React, { useState, useEffect, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import useConsumerReducer from '../router/consumer';

const PanelAdmin = () => {
    const [Movies, setMovies] = useState(null);
    const [consumerResult,consume]= useConsumerReducer()
    const [editingRows, setEditingRows] = useState({});
    const toast = useRef(null);

    useEffect(() => {
        consume({consumer:"MovieConsumer",consumerAction:"GetAllMovies"});
    }, []);
    useEffect(() => {
        console.log(consumerResult);
        if (consumerResult!=null && consumerResult.result.movies) {
            setMovies(consumerResult.result.movies)
        }
    }, [consumerResult]);

    const onRowEditComplete2 = (e) => {
        let _Movies = [...Movies];
        let { newData, index } = e;

        _Movies[index] = newData;

        consume({consumer:"MovieConsumer",consumerAction:"UpdateMovie",variables:{movie:e.newData}});
        setMovies(_Movies);
    }

    const onRowEditChange = (e) => {
        setEditingRows(e.data);
    }

    const textEditor = (options) => {
        return <InputText type="text" value={options.value} onChange={(e) => options.editorCallback(e.target.value)} />;
    }
    
    const onDelete = (e) => {
        let nonDeletedMovies = Movies.filter((movie) => movie.title !== e.title)
        nonDeletedMovies = nonDeletedMovies.length <= 0 ? null : nonDeletedMovies
        consume({consumer:"MovieConsumer",consumerAction:"DeleteMovie",variables:{movie:{slug:e.slug}}});
        setMovies(nonDeletedMovies)
    }

    const actionBodyTemplate = (rowData) => {
        return (
            <>
                <Button icon="pi pi-trash" onClick={() => onDelete(rowData)} />
            </>
        );
    }
    return (
        <div className="datatable-editing-demo">
            <Toast ref={toast} />

            <div className="card">
                <h5>Panel Admin</h5>
                <div className="pt-2 pb-4">
                    <Button onClick={() => window.location.href = "/createmovie"} label="Create" />
                </div>

                <div className="p-fluid">
                    <DataTable value={Movies} editMode="row" dataKey="title" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
                        <Column field="title" header="Title" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="genres" header="Genres" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="synopsis" header="Synopsis" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column field="rating" header="Rating" editor={(options) => textEditor(options)} style={{ width: '20%' }}></Column>
                        <Column rowEditor headerStyle={{ width: '10%', minWidth: '8rem' }} bodyStyle={{ textAlign: 'center' }}></Column>
                        <Column body={actionBodyTemplate} exportable={false} style={{ minWidth: '8rem' }}></Column>
                    </DataTable>
                </div>
            </div>

            
        </div>
    );
}

export default PanelAdmin