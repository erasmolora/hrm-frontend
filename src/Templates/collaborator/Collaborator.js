import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import { Link } from 'react-router-dom';


export default function Collaborator() {
  const { url } = useRouteMatch();

  return (
    <div className="col-lg-6">
      <div className="kt-portlet">
        <div className="kt-portlet__body">
          <div className="kt-infobox">
            <div className="kt-infobox__header">
              <h2 className="kt-infobox__title text-muted">!Ups, no tienes colaboradores</h2>
            </div>
            <div className="kt-infobox__body">
              <div className="kt-infobox__section">
                <div className="kt-infobox__content">
                  <p>
                    Aun no tienes colaboradores en tu nomina, puedes crearlos de dos formas, cargando un archivo de excel o crearlos manualmente mediante un formulario sencillo.
                    </p>
                  <br />
                  <div className="row">
                    <div class="col-md-6">
                      <Link>
                        <div class="kt-demo-icon">
                          <div class="kt-demo-icon__preview">
                            <i class="flaticon-upload"></i>
                          </div>
                          <div class="kt-demo-icon__class">Carga masiva</div>
                        </div>
                      </Link>
                    </div>
                    <div class="col-md-6">
                      <Link to={`${url}create-manual`}>
                        <div class="kt-demo-icon">
                          <div class="kt-demo-icon__preview">
                            <i class="flaticon-list"></i>
                          </div>
                          <div class="kt-demo-icon__class">Manual</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}